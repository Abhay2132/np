const ff = require("./ff"),
	{ _get } = require("../hlpr");
module.exports = async (req, res) => {
	log(req);
	let { link = false } = req.query;
	if (!link) return res.status(404).json({ error: "link missing in query" });
	const { headers } = req;
	
	const creq = s(link).get(link, );
	creq.on("error", e => {
		log({e});
		res.end();
	});
	creq.on("response", r => {
		if ( r.statusCode >= 300 ) return res.status(404).end();
		res.setHeader("Content-Type", r.headers["content-type"]);
		res.setHeader("Content-Length", r.headers["content-length"]);
		res.setHeader("Content-Disposition", "attachment; filename="+ pn(link)|| Date.now());
		r.pipe(res);
	});
	/*
	res.writeHead(stream.statusCode, stream.headers);
	log(stream.statusCode, stream.headers);
	stream.pipe(res);
	*/
};

const s = link => {
	if ( link.startsWith("https")) return require("https");
	return require("http");
}

const pn = url => url.split("/").at(-1).split("?").at(0)