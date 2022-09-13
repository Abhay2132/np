const { liveReload } = require("../hlpr");
const { genHash } = require("../captcha/hlpr");

module.exports = async function (io) {
	io.on("connection", (socket) => {
		if (!isPro) {
			log("new socket added from", socket.handshake.address);
			if (!newReloaded){
				global.newReloaded = true;
				emitReload();
			}
		}
		require("../../apps/fd/socket")(socket);
	});
};
