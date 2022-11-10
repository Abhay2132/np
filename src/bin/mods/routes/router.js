const colors = require("colors"),
	fs = require("fs"),
	urlm = require("url"),
	img = require("image-to-base64"),
	router = require("express").Router(),
	{ download, _get } = require("../hlpr");
let ts = require("./templates");
const hbs = require("handlebars")

router.get("/isLive", (req, res) => res.end("1"));
router.get("/", (req, res) => res.redirect("/index"));
for (let url in ts) 
	router.get(url, (req, res) => res.render(ts[url].view, ts[url]));

router.get("/imgD/dl", require("../../apps/imgD/dl"));

router.post("/fm", require("../../apps/fm/main").api);

router.post("/img", async (req, res) => {
	let { url } = req.body;
	if (url[0] == "/") url = j(pdir, url);
	img(url)
		.then((data) => res.send(data))
		.catch((err) => log(err, !res.end()));
});

router.get("/download", (req, res) => {
	if (!!!req.query.file)
		return res.status(300).end("File path not defined in query !");
	let f = req.query.file;
	while (f.includes("..")) f = f.replace("..", "");
	let file_path = j(sdir, "files", f);
	if (!fs.existsSync(file_path))
		return res.status(404).end('"' + file_path + '" not found !');
	return download(res, file_path);
});

router.post("/ytdl/getd", require("../../apps/ytdl/main.js").getD);
router.get("/ytdl/download", require("../../apps/ytdl/main.js").dl);

router.get("/getCJ", require("../getCJ/main"));
router.get("/captcha", require("../captcha"));

router.get("/pipe", require("../pipe"));
router.use("/fd/download", require("../../apps/fd"));

router.get("/sw", (req, res) => {
	fs.readFile(j(sdir, "views", "sw.hbs"),  (e,d) => {
		if (e) return res.end();
		res.setHeader("Content-Type", "application/javascript");
		const sw = hbs.compile(d.toString())({appV : __appV});
		res.setHeader("Content-Length", sw.length);
		// log({sw})
		res.end(sw);
	})
})

router.use((req, res ) => {
	res.status(404)
	const data = {
		err_code : 404,
		err_mess: "PAGE NOT FOUND !",
		title : "PAGE NOT FOUND !",
		mainHeading : 404
	}
	res.render("error", data);
});

module.exports = router;