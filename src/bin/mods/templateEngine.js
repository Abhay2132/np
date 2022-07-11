const hbs = require("express-handlebars"),
	fs = require("fs"),
	{minify} = require("uglify-js"),
	{js, css} = require("../files2Merge");
	
let getLF = () => new Promise( res => {
	fs.readFile(j(sdir, "public", "js", "loadFiles.js"), (err, txt) => {
		if ( err) return res(err)
		if ( ! isPro ) return res(txt.toString());
		res(minify(txt.toString()).code || "")
	})
})

module.exports = async () => {
	let loadFiles = await getLF();
	let engine = hbs.create({
		defaultLayout: "main",
		helpers: {
			isDev() {
				return !(process.env.NODE_ENV === "production");
			},
			loadFiles() {
				return loadFiles;
			},
			pwd () {
				return __dirname.split("/").slice(0, -3).join("/")
			},
			appV () {
				return __appV;
			},
			jsFiles() {
				return js;
			},
			cssFiles () {
				return css;
			}
		},
		extname: ".hbs",
	}).engine;
	return engine;
};


