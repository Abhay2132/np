const {exec} = require("child_process");
const fs = require("fs");
const { parse } = require("node-html-parser");
const { EventEmitter } = require('node:events');
const {imgFilter, getTE} = require("./hlpr");

class ImgD extends EventEmitter {
	k = false;
	constructor ({url, sid, start = true}) {
		super();
		global.imgDsessions[sid] = this;
		this.done = false;
		this.url = url;
		this.stats = {url};
		this.uid = parseInt(Math.random()* 1000);
		this.sid = sid;
		if (start) this.start(this.url);
	}
	
	async start (url) {
		this.done = !1;
		dlog("start :", this.uid);
		const htm = await this.fetch(url);		 			 if(this.k){dlog("killed : htm"); return (this.k = false);}
		const dom = await parse(htm); 						if(this.k){dlog("killed : dom"); return (this.k = false);}
		var imgs = dom.querySelectorAll("img"); 	   if(this.k){dlog("killed : imgs"); return (this.k = false);}
		var title = dom.querySelector("title").innerHTML;
		imgs = imgs.map(i => imgFilter(i, url)).filter(i => !!i);  	if(this.k){dlog("killed : filter"); return (this.k = false);}
		this.imgs = imgs;
		this.emit("imgD-imgs", {title, num : imgs.length} );							if(this.k){dlog("killed : emit"); return (this.k = false);}
		
		dlog("done :", this.uid, getTE());
		this.done = true; this.k = false;
	}
	
	fetch (url) {
		return new Promise( res => {
			exec(`curl '${url}'`, (e, stdout, stderr) => res(stdout));
		});
	}
	
	stop () {
		dlog("stopping :", this.uid);
		this.removeAllListeners("imgD-imgs");
		return new Promise(async res => {
			let i = 0;
			if ( ! this.done) {
				this.k = true;
				while(this.k) { i++; await new Promise(a => setImmediate(a)); }
			}
			res(/*this.emit("kill")*/);
			dlog("stopped :", this.uid, getTE(), {i});
		});
	}
}

module.exports = ImgD;