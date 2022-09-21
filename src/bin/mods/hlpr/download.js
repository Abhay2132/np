const fs = require('fs');

module.exports = function download(res = false, file = false, cb = () => {}) {
	return new Promise(async (r) => {
		let error = (errM) => {
			let e = new Error(errM);
			r(e);
			log(e);
			return cb(e);
		};
		if (!res) return error("Response Obect is mot defined");
		if (!fs.existsSync(file)) return error(`${file} not found !`);
		let fileStats = await new Promise((a) =>
			fs.stat(file, (er, s) => a(er || s))
		);
		if (!fileStats.isFile()) return error(`${file} is not a file !`);
		let data = fs.createReadStream(file);
		res.header("Content-Length", fileStats.size);
		res.header(
			"Content-Disposition",
			`attachment; filename=${require("path").basename(file)}`
		);

		res.on("finish", () => cb(null, file, r()));
		data.pipe(res);
	});
}
