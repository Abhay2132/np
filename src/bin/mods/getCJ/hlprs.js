const {css , js } = require("../../files2Merge.js");
const fs = require("fs");

const read = (file) => new Promise ( a => fs.readFile(file, (e, d) => a(e || d.toString())));
const mergeFiles = (files = [], dir = false) => new Promise ( async a => {
	if ( ! dir ) return a({error : "dir is not specdied"});
	var content = '';
	dir = j(pdir, dir);
	
	for(let file of files) content += await read(j(dir, file));
	
	a(content);
});

module.exports = {
	get_css : () => mergeFiles(css, "css"),
	get_js : () => mergeFiles(js, "js")
}