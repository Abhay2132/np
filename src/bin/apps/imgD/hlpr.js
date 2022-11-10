const fs = require("node:fs");
const http = require("node:http");
const https = require("node:https");

function imgFilter ( img , url ) {
	let src = img.getAttribute("src") || false;
	//dlog({src, url});
	if ( ! src ) return false;
	
	if(! src.includes("http")) {
		if ( url.at(-1) == "/") url = url.slice(0,-1);
		let host = url.split("/").slice(0,-1).join("/");
		src = src[0] == "/" ? host+src : host+"/"+src;
	}
	else src = src.slice(src.indexOf("http"));
	let name= img.getAttribute("alt") || src.split("/").at(-1).split("?")[0].slice(0, 30);
	let ext = name.split(".").at(-1);
	let exts = ["jpg", "jpeg", "webp", "png", "gif", "ico"]
	if (!exts.includes(ext)) name += ".jpg";
	//dlog({src, name});
	return {src, name};
}

const getTE = (n =3) => (performance.now()/1000).toFixed(3);

const validURL = url => {
	if (!url || !url.startsWith("http")) return false;
	return true;
}

function _get (signal, url, dest = false) {
	return new Promise( res => {
		var body = "";
		const cb = h => 
			h.get(url, {signal}, r => {
				if(dest) {
					if(!fs.existsSync(dest)) {
						let dir = dest.split("/").slice(0,-1).join("/");
						fs.mkdirSync(dir, { recursive : true });
					}
					r.pipe(fs.createWriteStream(dest));
				}
				r.on("data", c =>{body+=c});
				r.on('end', () => res(body));
			});
		
		let cr;
		if(!url.startsWith("http")) return res(body);
		if(url.startsWith("https")) cr = cb(https);
		else cr = cb(http);
		cr.on("error", e => dlog(e, res(body)));
	});
}

module.exports = { imgFilter , getTE , validURL, _get };