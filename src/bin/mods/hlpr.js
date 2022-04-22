const fs = require("fs"),
	colors = require("colors"),
	https = require("https"),
	http = require("http"),
	out = file => {
		let dir = file.split("/"); dir.pop()
		dir = dir.join("/");
		fs.mkdirSync(dir, {recursive : true});
		return fs.createWriteStream(file)
	},
	hbs = require("handlebars"),
	templates = require("./routes/templates")
	
const logger = (req, res, next) => {
		let st = Date.now();
		res.on("finish", () => {
		let mc = {
			GET: "green",
			POST: "yellow",
			PUT: "blue",
			DELETE: "red",
		};
		let clr = mc[req.method] || "grey";
		log(colors[clr](req.method), req.url, colors.yellow(Date.now() - st + "ms"))
		})
		next();
	}
	
const _get = ( url , dest , dev) => new Promise( async resolve => {
	if(dev) console.log(dev)
	let cb = ( r, res, des ) => {
		if ( des ) {
			r.pipe(out(des))
			r.on("end", res);
		} 
		else {
			let data = ""
			r.on("data" , chunk => (data += chunk))
			r.on("end", () => res(data));
		}
	}
	let req = ""
	if( url.startsWith("https")) req = https.get(url, r => cb(r, resolve,dest) )
	else if ( url.startsWith("http")) req = http.get(url, r => cb(r, resolve, dest))
	else return resolve(false)
	req.on("error", (e) => resolve({error : e}))
})

function getView (req, res) {
	let { view = false } = req.body || {}
	if ( ! view ) return res.json({ error : "View name is not defined !"})
	if (! getT(view)) return res.json({ error : "View not found !"})
	fs.readFile(j(sdir, "views", view+".hbs"), (error, txt) => {
		if ( error ) return res.json({error : error.message})
		txt = txt.toString()
		let temp = hbs.compile(txt)
		let {title, mainHeading } = getT(view)
		return res.json({ body : temp(), title, mainHeading})
	})
}

function getT(v = "") {
	for( let t in templates ) if ( templates [t].view === v ) return templates[t]
	return false
}

function download (res= false, file = false, cb = ()=>{}) {
	return new Promise (async r => {
		let error = (errM) =>  { let e = new Error(errM); r(e) ; log (e) ; return cb(e); }
		if ( ! res ) return error("Response Obect is mot defined");
		if ( ! fs.existsSync(file)) return error(`${file} not found !`);
		let fileStats = await (new Promise(a => fs.stat(file, (er, s) => a(er || s))))
		if ( ! fileStats.isFile()) return error(`${file} is not a file !`) 
		let data = fs.createReadStream(file);
		res.header("Content-Length", fileStats.size)
		res.header("Content-Disposition",`attachment; filename=${require("path").basename(file)}`);
		
		res.on("finish", () => cb(null, file, r()))
		data.pipe(res);
	})
}

module.exports = {
	logger : logger,
	_get : _get,
	getView : getView,
	download : download
};