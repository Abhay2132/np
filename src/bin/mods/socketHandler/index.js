const { liveReload } = require("../hlpr");
const { genHash } = require("../captcha/hlpr");

module.exports = async function (io) {
	io.on("connection", (socket) => {
		const route = socket.handshake.headers.referer.split("/")[3].toLowerCase();
		if (!isPro) {
			log("new socket added from", socket.handshake.address);
			if (!newReloaded){
				global.newReloaded = true;
				emitReload();
			}
		}
		switch(route) {
			case "fd" :
				require("../../apps/fd/socket")(socket);
				break;
			case "imgd" :
				require("../../apps/imgD/socket")(socket);
				break;
		}
	});
};
