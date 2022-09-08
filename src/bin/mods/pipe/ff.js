const { spawn } = require("child_process"),
	ffmpeg = isA ? "/data/data/com.termux/files/usr/bin/ffmpeg" :
	(process.env.ffmpeg || require('@ffmpeg-installer/ffmpeg').path)

module.exports = function (i , out) {
	if ( ! ( i && out ) ) return false;
	const ff = spawn(
		ffmpeg,
		[
			"-v", "panic",
			"-i", i,
			"-c:a", "copy",
			"-c:v", "copy",
			"-f", "matroska",
			"pipe:3",
		], {
			stdio: ["inherit", "inherit", "inherit", "pipe"],
		}
	);

	ff.stdio[3].pipe(out);
}
