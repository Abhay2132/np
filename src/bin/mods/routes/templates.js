let routes = {
	"/": { view: "index", title: "Node Pro", mainHeading: "Node Pro" },
	"/index": { view: "index", title: "Node Pro", mainHeading: "Node Pro" },
	"/?": { view: "index", title: "Node Pro", mainHeading: "Node Pro" },
	"/imgD": { view: "imgD", title: "Image Downloader", mainHeading: "Node Pro" },
	"/fm": { view: "fm", title: "File Manager", mainHeading: "File Manager" },
	"/ytdl": {
		view: "ytdl",
		title: "YouTube Video Downloader",
		mainHeading: "Node Pro",
	},
	"/wu": { view: "wu", title: "WhatsUp", mainHeading: "WhatsUp" },
	"/signup": { view: "signup", title: "SignUp", mainHeading: "SignUp" },
	"/fd": {
		view: "fd",
		title: "File Downloader",
		mainHeading: "File Downloader",
	},
};

if (!isPro) {
}

module.exports = routes;
