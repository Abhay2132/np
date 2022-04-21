const hbs = require("express-handlebars"),
	fs = require("fs"),
	{minify} = require("uglify-js");
	
let getLF = () => new Promise( res => {
	fs.readFile(j(sdir, "public", "js", "loadFiles.js"), (err, txt) => {
		if ( err) return res(err)
		if ( ! isPro ) return res(txt.toString());
		res(minify(txt.toString()).code || "")
	})
})

module.exports = async () => {
	let loadFiles = await getLF()
	
	let engine = hbs.create({
		defaultLayout: "main",
		helpers: {
			hn() {
				let host =
					process.env.NODE_ENV === "production"
						? "https://nexpp.herokuapp.com/"
						: "http://localhost:" + _port;
				return host;
			},
			isDev() {
				return !(process.env.NODE_ENV === "production");
			},
			loadFiles() {
				return loadFiles;
			},
			pwd () {
				return __dirname
			},
			pwd () {
				return __dirname.split("/").slice(0, -3).join("/")
			},
			appV () {
				return __appV;
			}
		},
		extname: ".hbs",
	}).engine;
	return engine;
};


