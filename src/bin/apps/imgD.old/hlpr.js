const fs = require("fs");
const rl = require("readline");
const { exec } = require("child_process");

const d_img = (url, dir, name) =>
	new Promise((a) =>
		exec(
			`curl ${url} > '${name}'`,
			{ cwd: j(ddir, dir) },
			(err, stdout, stderr) => a({ err, stdout, stderr })
		)
	);

const getHTM = (url) =>
	new Promise(async (res) => {
		exec(`curl "${url}"`, (e, stdout, stderr) => res(stdout));
	});

const ddir = j(sdir, "files", "imgD");

const bn = require("path").basename;

const pn = (url) => require("url").parse(url).pathname;

const ext = (f) =>
	typeof f !== "string"
		? false
		: f.split(".").length > 1
		? f.split(".").at(-1)
		: false;

const stdout = (...a) => process.stdout.write(a.join(" "));

const beautify = (str) =>
	require("prettier").format(
		typeof str == "object" ? JSON.stringify(str) : str,
		{ useTabs: false, parser: "json" }
	);

const upStats = (url, stats) =>
	fs.writeFileSync(
		j(ddir, parseURL(url).dir, "stats.json"),
		beautify(JSON.stringify(stats))
	);

const slog = (stats) =>
	new Promise((res) => {
		if (process.env.NODE_ENV) return res();
		console.clear();
		rl.cursorTo(process.stdout, 0, 0);
		stdout(beautify({ ...stats, isDead: isDead(stats.url) }, "  "));

		res();
	});

const jsonFile = (fp) => JSON.parse(fs.readFileSync(fp));
function isD(url) {
	// is Done
	let { dir } = parseURL(url);
	if (!fs.existsSync(j(ddir, dir, "stats.json"))) return false;
	let { done } = jsonFile(j(ddir, dir, "stats.json"));
	return !fs.existsSync(j(ddir, dir, dir + ".zip")) && done;
}

const imgN = (img, i) => {
	let exts = ["jpg", "gif", "png"];
	let alt = (img.getAttribute("alt") || "")
			.replace(/[\/\s]/g, "_")
			.slice(0, 40),
		src = (img.getAttribute("src") || "").replace(/\//g, "_"),
		name = bn(pn(src)),
		extnsn = exts.includes(ext(name)) ? ext(name) : "gif";
	name = `${i}. ${alt || name}.${extnsn}`;
	//log(name);
	return name;
};

function parseURL(url) {
	if (!url) return false;
	let u = require("url").parse(url),
		dir = j(u.hostname, u.pathname).replace(/[\/]/g, "_").replace(/[+]/g, "-");

	if (dir.endsWith("_")) dir = dir.slice(0, -1);
	return { dir: dir, hostN: u.host, p: u.protocol };
}

const isDead = (url, dev) => {
	let { dir } = parseURL(url),
		stats = "";
	try {
		stats = JSON.parse(fs.readFileSync(j(ddir, dir, "stats.json")));
	} catch (e) {
		return e;
	}
	let tick = parseInt((Date.now() - stats.tick) / 1000) < 5;
	if (dev)
		log(
			" ! ( %s : %i || %s ) ",
			tick,
			parseInt((Date.now() - stats.tick) / 1000),
			stats.done
		);
	return !(tick || stats.done);
};

var stats = {
	status: 1,
	done: false,
	tick: Date.now(),
	sat: Date.now(),
	failed: 0,
	dlnk: "",
	downloaded: 0,
};

const imgU = (img, url) => {
	let src = img.getAttribute("src");
	//let regexp = src.match(/[^A-Za-z0-9-_\/.:+]/g);
	//if (!!regexp) return log({ 'if' : !!regexp, matched : regexp, src });
	src = src.replace(/[\n\t]/g, '')
	//log({src : img.getAttribute("src")}, img.getAttribute("src").startsWith("http"));
	if ( src.startsWith("http"))
		return src;
	else
		return j(url.split("/").slice(0, 3).join("/"), src);
}

module.exports = {
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
	imgU,
};
