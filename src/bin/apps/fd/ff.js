const { spawn } = require("child_process"),
	ffmpeg = isA
		? "/data/data/com.termux/files/usr/bin/ffmpeg"
		: process.env.ffmpeg || require("@ffmpeg-installer/ffmpeg").path;

module.exports = (i, out) => new Promise( res =>  {
	if (!(i && out)) return res({error : "i or out is not defined properly !"});
	const ff = spawn(
		ffmpeg,
		[
			"-v",
			"panic",
			"-i",
			i,
			"-c:a",
			"copy",
			"-c:v",
			"copy",
			"-f",
			"matroska",
			out,
		],
		{
			stdio: ["inherit", "inherit", "inherit", "pipe"],
		}
	);
	
	ff.on("close", res);
});
