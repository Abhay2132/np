const { liveReload } = require("../hlpr");
const { genHash } = require("../captcha/hlpr");

module.exports = async function (io) {
	io.on("connection", (socket) => {
		if (!isPro) {
			log("new socket added from", socket.handshake.address);
			//global.emitReload = ()=>io.emit("reload");
		}
		require("../../apps/fd/socket")(socket);
	});
};
