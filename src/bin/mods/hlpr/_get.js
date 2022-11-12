const fs = require("fs");
const http = require("http")
const https = require("https");
const out  = dest => {
	let dir = dest.split("/").slice(0,-1).join("/");
	if( ! fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true});
	return fs.createWriteStream(dest);
}

const _get = ({ ondata, url, dest = false, ret = false, headers = {} }) =>
	new Promise(async (resolve) => {
		let cb = (r, res, des) => {
			r.abort = () => req.abort();
			if (ret) return res(r);
			if (des) {
				typeof ondata == 'function' && r.on("data", chunk => {
					ondata(chunk, r.headers["content-length"])
				});
				r.pipe(out(des));
				r.on("end", res);
			} else {
				let data = "";
				r.on("data", (chunk) => {
					typeof ondata == 'function' && ondata(chunk, r.headers["content-length"]);
					data += chunk
				});
				r.on("end", () => res(data));
			}
		};
		let req = "";
		if (url.startsWith("https"))
			req = https.get(url, { headers }, (r) => cb(r, resolve, dest));
		else if (url.startsWith("http"))
			req = http.get(url, { headers }, (r) => cb(r, resolve, dest));
		else return resolve(false);
		req.on("error", (e) => resolve({ error: e }));
	});
	
module.exports = _get