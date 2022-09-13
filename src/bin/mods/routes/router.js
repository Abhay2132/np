const colors = require("colors"),
	fs = require("fs"),
	urlm = require("url"),
	img = require("image-to-base64"),
	vm = require("../vm.js"),
	router = require("express").Router(),
	{ download, _get } = require("../hlpr");
let ts = require("./templates");
for (let url in ts) 
	router.get(url, (req, res) => res.render(ts[url].view, ts[url]));

router.get("/", (req, res) => res.redirect("/index"));
router.post("/imgD", require("../../apps/imgD/main"));

router.post("/fm", require("../../apps/fm/main").api);

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

router.post("/img", async (req, res) => {
	let { url } = req.body;
	if (url[0] == "/") url = j(pdir, url);
	img(url)
		.then((data) => res.send(data))
		.catch((err) => log(err, !res.end()));
});

router.get("/ytdl/download", require("../../apps/ytdl/main.js").dl);
router.post("/ytdl/getd", require("../../apps/ytdl/main.js").getD);

router.post("/getView", require("../hlpr").getView);
var i = 1;
if (!isPro)
	router.get("/reload", (req, res) => {
		let reloadReq;
		if (!global.reloadClients) global.reloadClients = {};
		let clientIp =
			req.headers["x-forwarded-for"] || req.socket.remoteAddress || null;
		try {
			if (!Object.keys(global.reloadClients).includes(clientIp))
				global.reloadClients[clientIp] = true;
			reloadReq = global.reloadClients[clientIp];
			//process.stdout.write(" " + ++i);
			res.end(JSON.stringify({ reloadReq }));
			global.reloadClients[clientIp] = false;
		} catch (e) {
			log({ e, reloadReq });
		}
	});

router.get("/getCJ", require("../getCJ/main"));
router.get("/captcha", require("../captcha"));

router.get("/pipe", require("../pipe"));
router.use("/fd/download", require("../../apps/fd"));

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
