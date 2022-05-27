const colors = require("colors"),
	fs = require("fs"),
	urlm = require("url"),
	img = require("image-to-base64"),
	vm = require("../vm.js"),
	router = require("express").Router(),
	{download} = require("../hlpr")

	router.get("/", (req, res) => res.redirect("/index"))
	
	router.use((req, res, next) => {
		let ts = require("./templates")
		for (let url in ts) {
			router.get(url, (_req, _res) => {
				let t = ts[url]
				_res.render(t.view, t);
			});
		}
		next();
	});

	router.post("/imgD", require("../../apps/imgD/main"));

	router.post("/fm", require("../../apps/fm/main").api);

	router.get("/download", (req, res) => {
		if (!!! req.query.file) return res.status(300).end("File path not defined in query !")
		let f = req.query.file;
		while ( f.includes(".."))  f = f.replace("..", "");
		let file_path = j(sdir, "files", f);
		if (!fs.existsSync(file_path)) return res.status(404).end('"'+file_path + "\" not found !");
		return download (res, file_path);
	});

	router.post("/img", async (req, res) => {
		let { url } = req.body;
		if (url[0] == "/") url = j(pdir, url);
		img(url)
			.then((data) => res.send(data))
			.catch((err) => res.send(err));
	});

	router.get("/ytdl/download", require("../../apps/ytdl/main.js").dl);	
	router.post("/ytdl/getd", require("../../apps/ytdl/main.js").getD);
	
	router.post ("/getView", require("../hlpr").getView)
	
	if ( ! isPro ) router.get("/reload", (req, res) => {
		res.end(JSON.stringify({reload : global.reload}));
		global.reload = false;
	})
	
module.exports = router