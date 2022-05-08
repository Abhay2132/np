const ytdl = require("ytdl-core"),
	{ spawn } = require("child_process"),
	ffmpeg = isPro ? "/app/vendor/ffmpeg/ffmpeg" : require("os").platform() == 'android' ? "/data/data/com.termux/files/usr/bin/ffmpeg" : "/usr/bin/ffmpeg",
	{ bs } = require("./hlpr"),
	beautify = (str) =>
		require("prettier").format(
			typeof str == "object" ? JSON.stringify(str) : str,
			{ useTabs: true, parser: "json" }
		);

async function getD(req, res) {
	let {url = false} = req.body || {};
	if (!url) return res.json({ error: "url is missing !" });
	let err
	let vqs = {}; // video quality & size
	let aqs = {}; // audio quality and size
	let data = { vqs: {}, aqs : {} },
		info
	try {
	info = await ytdl.getInfo(url);
	} catch (e) { err = e ; log(e) }
	if (err) return res.json({error : err.message})
	
	data.title = info.videoDetails.title;
	data.dur = info.videoDetails.lengthSeconds;
	data.iframeUrl = info.videoDetails.embed.iframeUrl;
	data.thumbnail = info.videoDetails.thumbnails.at(-1).url;
	info.formats.forEach((f) => {
		let ql = f.qualityLabel;
		if (!!f.height && ql.at(-1) == "p" && !!f.contentLength && !!f.hasVideo)
			vqs[ql] = {size : f.contentLength, height : f.height }
		if (!!f.hasAudio && f.contentLength )
			aqs[f.audioBitrate + " kbps"] = f.contentLength
	});
	let svks = bs(Object.keys(vqs)),
		saks = bs(Object.keys(aqs))
	svks.forEach((k) => (data.vqs[k] = vqs[k]));
	saks.forEach((k) => (data.aqs[k] = aqs[k]));

	return res.json(data);
}

async function dl(req, res) {
	let { url = false, q = false , a = false, v = false} = req.query || {};
	if (!(url && q)) return res.status(401).end("url / quality missing in query");
	q = parseInt(q);
	//log("dl");
	if ( a ) return dlAudio(url, q, res);
	let err;
	//log("getting info !")
	let info = await ytdl.getInfo(url);
	let name = info.videoDetails.title.replace(/[^a-zA-Z_0-9]/g ,"_")
	while(name.includes("__")) name = name.replace("__", "_")
	let videoF;
	//log({name})
	try {
		videoF = await ytdl.chooseFormat(info.formats, {
			filter: (f) => f.height == q && !!f.contentLength && !!f.hasVideo,
		});
	} catch (e) {
		err = e;
		console.log(e);
	}

	if (err) return res.end(beautify({url, q, error : err.message, fs : info.formats.map(f => ({height : f.height}))  }));

	let audio = ytdl(url);
	let video = ytdl(url, { quality: videoF.itag });

	let ff = spawn(
		ffmpeg,
		[
			"-v","panic",
			"-i","pipe:3",
			"-i","pipe:4",
			"-map","0:a",
			"-map","1:v",
			"-c:a","copy",
			"-c:v","copy",
			"-f","matroska",
			"pipe:5",
		],
		{
			stdio: ["inherit", "inherit", "inherit", "pipe", "pipe", "pipe"],
		}
	);

	res.header("Content-Type", "video/x-matroska");
	res.header(
		"Content-Disposition",
		`attachment; filename=${name}_${q}.mkv`
	);
	
	let dps = 0; // deadPipes
	ff.on("close", () => dps =! 3 ? ++dps : res.end());
	audio.on("close", () => dps =! 3  ? ++dps : res.end());
	video.on("close", () => dps =! 3  ? ++dps : res.end());

	audio.pipe(ff.stdio[3]);
	video.pipe(ff.stdio[4]);
	//log("piping")
	ff.stdio[5].pipe(res);
}

async function dlAudio ( url, q, res) {
	if ( !url || !q ) return res.json({error : "url / q is missing !", url : url, q :q })
	
	let err;
	let info = await ytdl.getInfo(url);
	let name = info.videoDetails.title.replace(/[^a-zA-Z_0-9]/g ,"_")
	while(name.includes("__")) name = name.replace("__", "_")
	let audioF;
	try {
		audioF = await ytdl.chooseFormat(info.formats, {
			filter: (f) => f.audioBitrate == parseInt(q) && !!f.contentLength && !!f.hasAudio,
		});
	} catch (e) {
		err = e;
		console.log(e);
	}

	if (err) return res.end(err.message);

	let audio = ytdl(url, { quality: audioF.itag });
	res.header("Content-Type", "audio/mp3");
	res.header(
		"Content-Disposition",
		`attachment; filename=${name}_${q}kbps.mp3`
	);
	audio.pipe(res)
}

module.exports = {
	getD: getD,
	dl: dl,
};
