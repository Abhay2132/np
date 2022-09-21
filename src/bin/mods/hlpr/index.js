const fs = require("fs"),
	https = require("https"),
	http = require("http"),
	out = (file) => {
		let dir = file.split("/");
		dir.pop();
		dir = dir.join("/");
		fs.mkdirSync(dir, { recursive: true });
		return fs.createWriteStream(file);
	},
	hbs = require("handlebars"),
	templates = require("../routes/templates"),
	path = require("path"),
	{ minify } = require("uglify-js"),
	cc = require("clean-css"),
	em = require("events");

function ext(a, s = "/") {
	return a.split(s).at(-1).split("?")[0].split(".").at(-1);
}
const logger = require("./logger");
const _get = require("./_get");
const download = require("./download")
const liveReload = require("./liveReload")
module.exports = {
	logger,
	_get,
	download,
	ext,
	liveReload,
};
