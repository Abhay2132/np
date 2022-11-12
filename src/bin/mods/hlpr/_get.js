const fs = require("fs");
const http = require("http")
const https = require("https");
const out = dest => {
	let dir = dest.split("/").slice(0, -1).join("/");
	if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
	return fs.createWriteStream(dest);
}

const _get = ({ ondata, url, dest = false, body = false, headers = {}, abort = false }) =>
	new Promise(async (resolve, reject) => {
		if (!url.startsWith("http")) return reject("Invalid URL  (must start with a http) : " + url);
		body = !body || '';
		let f = (h) =>
			h.get(url, { headers, abort }, response => {
				if (ondata) response.on("data", chunk => { ondata(chunk, response.headers["content-length"]) })
				if (body === '') {
					if (response.headers["content-length"] > 10240) return reject("file size is more than 10240 kB, causes the memory leaks if response body is stored, instead file it into a file...")
					response.on("data", c => body += c.toString());
				}
				if (dest) response.pipe(out(dest));
				response.on("end", () => resolve(body));
			})

		let req = "";
		if (url.startsWith("https"))
			req = f(https)
		else if (url.startsWith("http"))
			req = f(http)
		req.on("error", (e) => {dlog({e}); resolve(e)});
	});

module.exports = _get