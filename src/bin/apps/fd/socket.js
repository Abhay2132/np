const {_get } = require("../../mods/hlpr");
const ff = require("./ff");

const emitError = (s,e) => s.emit("error", {error : e});
const pn = url => url.split("/").at(-1).split("?").at(0)

module.exports = function (socket) {
	
	socket.on("download",async ({url, mode='file'}) => {
	
	!isPro && log({url, mode})
	var size = 0
	const ondata = (c, l) => {
		c = c.toString().length;
		size += c;
		const progress =Math.round( (size/l).toFixed(2) * 100 ) + "%";
		!isPro && process.stdout.write("\r progress : " + progress);
		socket.emit("fd_progress", { progress });
		}
		
		if ( ! url ) return emitError(socket, "url is not defined");
		const filename = pn(url);
		const dest = j(sdir, "files", "fd", filename);
		if ( mode == 'file' ) await _get({url, dest , ondata})
		if ( mode == 'ff' ) await ff(url, dest);
		socket.emit("fd_done", {link : filename });
	});
}