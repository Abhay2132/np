let files = {
	js: [
		"hlpr.js",
		"main.js",
		"imgC.js",
		"fm.js",
		"ytdl.js",
		"pb.js",
		"imgD.js",
		"icons.js",
		"cacheV.js",
		"wu.js",
		"captcha.js",
		"fd.js",
		"login.js",
		"snackbar.js"
	],
	css: [
		"ui/layout.css",
		"ui/nav.css",
		"ui/hmbgr.css",
		"ui/sidePanel.css",
		"ui/button.css",
		"ui/spinner.css",
		"ui/svg.css",
		"ui/ps.css",
		"ui/center.css",
		"ui/user-control.css",
		"ui/error.css",
		"ui/snackbar.css",

		"index/main.css",
		"index/bars.css",

		"fm/main.css",
		"fm/nav.css",
		"fm/folder.css",
		"fm/arrow.css",

		"wu/main.css",
		"wu/search-bar.css",
		"wu/fab.css",
		"wu/chat.css",

		"imgD/main.css",
		"imgD/pb.css",
		"imgD/dbtn.css",
		"imgD/input.css",
		"imgD/loading.css",

		"ytdl/error.css",
		"ytdl/form.css",
		"ytdl/heading.css",
		"ytdl/panel.css",
		"ytdl/video-panel.css",

		"signup/form.css",
		"login/form.css",

		"fd/form.css",
		
		"gallery/img.css",

		"keyframes.css",
		"night-mode.css",
	],
	views: ["index", "imgD", "ytdl", "wu", "fm", "signup", "fd", "login"],
};

if(!isPro) files.views.push("gallery");
module.exports = files;
