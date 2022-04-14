const hbs = require("express-handlebars"),
	fs = require("fs"),
	{c4u} = require("./vm"),
	{minify} = require("uglify-js"),
	VS = require("./vs")

let getLF = () => new Promise( res => {
	fs.readFile(j(sdir, "public", "js", "loadFiles.js"), (err, txt) => {
		if ( err) return res(err)
		res(minify(txt.toString()).code || "")
	})
})

let getCV = () => new Promise( res => {
	fs.readFile(j(sdir, "public", "js", "getViews.js"), (err, txt) => {
		if ( err) return res(err)
		res(minify(txt.toString()).code || "")
	})
})

module.exports = async () => {
	let loadFiles = await getLF(),
		getViews = await getCV()
	let sdp = j("src","static") // static dir path ( rel. path ) 
	let svs = new VS({ // static version system
		dirs :{
			"css" : j(sdp, "public", "css"),
			"js" : j(sdp, "public", "js")
		},
		ignores : ["eruda.min.js", "loadFiles.js"],
		vdir : j(sdp, "public"),
		useS : true
	}),
	vvs = new VS({ // view version system
		dirs : {"view" : j(sdp, "views")},
		ignores : ["versions.json"],
		vdir : j(sdp, "views"),
		useS : true
	}),
	{newVs : vs, updated} = await svs.c4u(),
	{newVs : views, updated : upViews } = await vvs.c4u()
	
	if ( Object.keys(updated).length > 0 ) log({updated})
	if ( Object.keys(upViews).length > 0 ) log({upViews})
	
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
			cdn () {
				let cdn =
					process.env.NODE_ENV === "production"
						? "https://cdn2132.herokuapp.com"
						: "http://localhost:9000";
				return cdn;
			},
			isDev() {
				return !(process.env.NODE_ENV === "production");
			},
			loadFiles() {
				return loadFiles;
			},
			style() {
				return css;
			},
			versions () {
				return vs;
			},
			pwd () {
				return __dirname
			},
			mainHeading () {
				return "NODE EXPRESS Pratice"
			},
			pwd () {
				return __dirname.split("/").slice(0, -3).join("/")
			},
			views () {
				return views
			},
			getViews() {
				return getViews
			}
		},
		extname: ".hbs",
	}).engine;
	return engine;
};


