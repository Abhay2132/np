let routes = {
		"/": { "view": "index", "title": "NODE EXPRESS Practice", "mainHeading": "NODE EXPRESS Practice" },
		"/index": { "view": "index", "title": "NODE EXPRESS Practice", "mainHeading": "NODE EXPRESS Practice" },
		"/?": { "view": "index", "title": "NODE EXPRESS Practice", "mainHeading": "NODE EXPRESS Practice" },
		"/fs": {"view": "fs",	"title": "FS module Testing",	"mainHeading": "FS module Testing"},
		"/imgD": { "view": "imgD", "title": "Image Downloader", "mainHeading": "NODE EXPRESS Practice" },
		"/fm": {"view": "fm",	"title": "File Manager",	"mainHeading": "File Manager"},
		"/ytdl": { "view": "ytdl", "title": "YouTube Video Downloader" , "mainHeading": "NODE EXPRESS Practice"},
		"/wu": { "view": "wu", "title": "WhatsUp" , "mainHeading": "WhatsUp"}
	};

if ( ! isPro ) {
	
}

module.exports = routes;
