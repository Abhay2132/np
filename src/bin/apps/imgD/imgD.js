const {exec} = require("child_process");
const fs = require("fs");
const { parse } = require("node-html-parser");
const { EventEmitter } = require('node:events');
const {imgFilter, getTE, validURL, _get} = require("./hlpr");

class ImgD extends EventEmitter {
	k = false;
	constructor ({url, sid}) {
		super();
		global.imgDsessions[sid] = this;
		this.done = false;
		this.url = url;
		this.stats = {url};
		this.uid = parseInt(Math.random()* 1000);
		this.sid = sid;
		this.dir = j(sdir, "files", "imgD", this.uid+'');
		this.acs = [];
	}
	
	async start (url = "") {
		this.done = !1;
		dlog("start :", this.uid);
		if (!validURL(url)) {
			// dlog("invalid url")
			this.emit("imgD-err", {error : `url ("${url}") is invalid`})
			return this.finsihed();
		};

		let ac = new AbortController();
		this.acs.push(ac);
		const htm = await _get(ac.signal, url, !isPro ? j(this.dir, "source.htm") : !1);		 				
		const dom = await parse(htm); 						
		var imgs = dom.querySelectorAll("img"); 	 
		var title = dom.querySelector("title").innerHTML; let n = 1;
		imgs = imgs.map(i => imgFilter(i, url, n++)).filter(i => !!i);  	
		this.imgs = imgs;
		this.emit("imgD-imgs", {title, num : imgs.length} );						
		await this.dl(imgs);
		
		this.finsihed();
	}
	
	dl (imgs) { 
		return new Promise( async res => {
			const len = imgs.length;
			let i = 0;
			for(let img of imgs) {
				let ac = new AbortController();
				this.acs.push(ac);
				_get(ac.signal, img.src, j(this.dir, img.name))
				.then( b => {
					++i;
					if ( i != len) return this.emit("imgD-dl", { i , len});
					this.zip();
					this.emit("imgD-done", { len, uid : this.uid });
					res();
					dlog(this.uid, ": downloaded", len, "imgs");
				});
			}
		})
	}
	
	zip () {
		let zip = new require("adm-zip-node")();
		let files = fs
			.readdirSync(j(this.dir))
			//.filter((file) => file !== "stats.json" || file !== "source.htm");
		files.forEach((file) => zip.addLocalFile(j(this.dir, file)));
		let zipPath = j(this.dir, this.uid+".zip")
		zip.writeZip(zipPath);
	}
	
	finsihed () {
		dlog("done :", this.uid, getTE());
		this.done = true; 
		this.k = false;
	}

	fetch (url) {
		return new Promise( res => {
			exec(`curl '${url}'`, (e, stdout, stderr) => res(stdout));
		});
	}
	
	stop () {
		dlog("stopping :", this.uid);
		this.removeAllListeners("imgD-imgs");
		for(let ac of this.acs ) ac.abort();
		dlog("stopped :", this.uid, getTE());
	}
}

module.exports = ImgD;