const {
	d_img,
	getHTM,
	ddir,
	bn,
	ext,
	pn,
	stdout,
	beautify,
	upStats,
	slog,
	jsonFile,
	isD,
	imgN,
	parseURL,
	isDead,
	stats,
	imgU
} = require ("./hlpr");
const fs = require("fs");
const slogoff = true;
const { parse } = require("node-html-parser");

const init = (url, flag, usePupp) =>
	new Promise(async (res) => {
		stats.url = url;
		if (flag) res(stats);
		let { dir, hostN, p } = parseURL(url);
		
		if (fs.existsSync(j(ddir, dir)))
			fs.rmSync(j(ddir, dir), { recursive: true });
		if (!fs.existsSync(j(ddir, dir)))
			fs.mkdirSync(j(ddir, dir), { recursive: true });
		stats.status = 2;
		stats.dlnk = "download?file=" + j("imgD", dir, dir + ".zip");
		if (!isDead(url)) return log("imgD cancelled !");
		
		upStats(url, stats);
		
		let tick = setInterval(() => {
			stats.tick = Date.now();
			stats.timeElapsed =
				parseFloat((Date.now() - stats.sat) / 1000).toFixed(2) + "s";
			upStats(url, stats);
			slog(stats);
		}, 1000);
		
		let i = 0;
		var htm = await getHTM(url);
		if ( !isPro) fs.writeFile(j(ddir, dir, "source.htm"),  htm, () => {})
		if (htm.error) return res(log("Error : Unable to get html"));
		let dom = await parse(htm),
			imgs = dom.querySelectorAll("img");
			
		stats.imgs = imgs.length;
		stats.status = 3;
		let getAlt = (img) => (img.getAttribute("alt") || "").slice(0, 10) || "";
		imgs = imgs.filter((img) => !!img.getAttribute("src"));
		imgs = imgs.map((img) => ({
			url: imgU(img, url),
			name: imgN(img, ++i),
			alt: getAlt(img),
		}))
		.filter( img => img.url );
		slog(stats);
		upStats(url, stats);
		
		//return log(imgs.map(i => i.url));
		for (let i = 0 ; i < imgs.length; i++) {
			let img = imgs[i];
			let d = await d_img(img.url, dir, img.name);
			
			if(d.err) {
				stats.failed += 1;
				fs.appendFileSync(j(ddir, dir, "failed.txt"), `'${img.url}'` + "\n");
			}
			else stats.downloaded = i+1;
			upStats(url, stats);
			
			slog(stats);
		}

		let zip = new require("adm-zip-node")();
		let files = fs
			.readdirSync(j(ddir, dir))
			.filter((file) => file !== "stats.json" || file !== "source.htm");
		files.forEach((file) => zip.addLocalFile(j(ddir, dir, file)));
		stats.status = 4;
		let zipPath = j(ddir, dir, dir + ".zip")
		zip.writeZip(zipPath);
		isPro && files.forEach((file) => fs.rmSync(j(ddir, dir, file)));

		stats.tick = Date.now();
		stats.done = true;
		upStats(url, stats);
		clearInterval(tick);
		slog(stats);
		stats.imgLnks = {}
		res();
	});



function ImgD () {
	this.init = init;
}

module.exports = {
	isDead,
	parseURL,
	isD, // is Done
	ImgD,
};

/*

1. Job Started 
2. Fetching html
3. downloading imgs
4. Zipping Files

*/
