const ff = require("./ff"),
	{ _get } = require("../hlpr");
	
module.exports = async (req, res) => {
	let { link = false } = req.query;
	if (!link) return res.status(404).json({ error: "link missing in query" });
	const  headers  = { "User-Agent" :  req.headers["user-agent"]};
	if( ! link.startsWith("http"))
		return res.render("error", {err_mess : `link '${link}' doesn't starts with http / https ! `, err_code : 400, mainHeading: "ERROR" })
	const creq = s(link).get(link, { headers });
	creq.on("error", e => {
		res.end();
	});
	creq.on("response", r => {
		setHeaders({r, res, link});
		r.pipe(res);
	});
};

const s = link => {
	if ( link.startsWith("https")) return require("https");
	return require("http");
}

const pn = url => url.split("/").at(-1).split("?").at(0)

function setHeaders ({r,res, link}) {
	if ( r.statusCode >= 400 ) return res.status(404).end();
	if (r.headers["content-type"])
		res.setHeader("Content-Type", r.headers["content-type"]);
	if (r.headers["content-length"])
		res.setHeader("Content-Length", r.headers["content-length"]);
	res.setHeader("Content-Disposition", "attachment; filename="+ pn(link)|| Date.now());
}