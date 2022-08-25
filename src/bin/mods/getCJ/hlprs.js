const {css , js } = require("./files");
const fs = require("fs");
const {minify} = require("uglify-js");

const read = (file) => new Promise ( a => fs.readFile(file, (e, d) => a(e || (isPro && file.endsWith(".js") ? minify(d.toString()).code : d.toString()) )));
const mergeFiles = (files = [], dir = false) => new Promise ( async a => {
	if ( ! dir ) return a({error : "dir is not specdied"});
	var content = '';
	dir = j(pdir, dir);
	
	for(let file of files) content += await read(j(dir, file));
	a(content);
});

async function getData(){
	const data = {};
	data.css = await mergeFiles(css, "css")
	data.js = await mergeFiles(js, "js")
	return data;
}

module.exports = {
	getData
}