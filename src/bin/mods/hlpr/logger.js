const colors = require("colors");
module.exports  = (req, res, next) => {
	if (req.url == "/reload") return; //log({reload})
	let st = performance.now();
	let mc = {
		GET: "green",
		POST: "yellow",
		PUT: "blue",
		DELETE: "magenta",
	};
	let clr = mc[req.method] || "grey";
	clr = colors[clr](req.method);
	//process.stdout.write(req.url+" ");
	res.on("finish", () => {
		let method = res.statusCode >= 400 ? colors.bgRed(clr) : clr;
		log(
			req.url,
			method,
			colors.yellow((performance.now() - st).toFixed(2) + "ms")
		);
	});
	//console.log(req.headers, req.statusCode);
	next();
};