const {_get } = require("../../mods/hlpr");
const ff = require("./ff");
const { existsSync : es, rmSync : rm , mkdirSync : ms} = require("fs");

const emitError = (s,e) => s.emit("error", {error : e});
const pn = url => url.split("/").at(-1).split("?").at(0)

module.exports = function (socket) {
	dlog("haha");
	socket.on("download",async ({url, mode='file'}) => {
	const logging = process.env.logging || false;
	dlog({url, mode})
	var size = 0
	const ondata = (c, l) => {
		c = c.toString().length;
		size += c;
		const progress =Math.round( (size/l).toFixed(2) * 100 ) + "%";
		//process.stdout.write("\r progress : " + progress);
		socket.emit("fd_progress", { progress });
		}
		
		if ( ! url ) return emitError(socket, "url is not defined");
		const filename = pn(url);
		const dir = j(sdir, "files", "fd");
		const dest = j(dir, filename);
		if ( ! es(dir)) ms(dir, {recursive : true });
		if ( es(dest)) rm(dest, { recursive: true});
		if ( mode == 'file' ) await _get({url, dest , ondata})
		if ( mode == 'ff' ) await ff(url, dest);
		
		socket.emit("fd_done", {link : filename });
	});
}