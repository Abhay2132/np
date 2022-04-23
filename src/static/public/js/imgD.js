(async function () {
	const styles = {
			pg: "display: inline-block; height: 30px; width: 300px; box-sizing: border-box; border: 1px solid; border-radius: 5px; overflow: hidden; font-family: calibri",
			bgTxt:
				"position: relative ;text-align: center; box-sizing: border-box; border-radius: 0px;height: 28px;background: rgba(0,0,0,0.2); width: 298px; padding: 7px; font-size: 14px; color : #162;",
			bar: "position: relative ;text-align: center; box-sizing: border-box;border-radius: 0px;height: 28px; background: #2a5; top: -28px; width: 0px; overflow: hidden; transition : 2s linear;",
			txt: "display: block; width: 298px; font-size: 14px; height: 28px; color: #fff; padding: 7px; box-sizing: border-box;",
			glare:
				"height: 28px; position: relative ; width: 80px; background: linear-gradient(90deg, rgba(250,250,250,0), rgba(250,250,250,0.5), rgba(250,250,250,0.8)); animation: glare 2s linear 0s infinite normal ; top: -28px; border-radius: 0px 3px 3px 0px;",
		},
		kf = `
@keyframes glare {
    from {left: -80px;}
    to {left: 101%;}
}
`;

	window.progressBar = function (pTag) {
		const me = this;
		let ac = (a, ...c) => c.forEach((b) => a.appendChild(b)),
			d = (s) => {
				let tag = document.createElement("div");
				tag.style = s;
				return tag;
			},
			s = (h) => {
				let tag = document.createElement("style");
				tag.innerHTML = h;
				return tag;
			};
		for (let t in styles) me[t] = d(styles[t]);

		this.init = (pTag) => ac(pTag, me.pg, s(kf));

		this.config = (pgBody) => {
			ac(me.bar, me.txt);
			ac(me.bar, me.glare);
			ac(me.pg, me.bgTxt);
			ac(me.pg, me.bar);
			me.text = "";
			me.width = "1%";
		};
		this.config();

		this.update = (data) => {
			me.text = data.text || me.text;
			me.width = data.width || me.width;

			me.bgTxt.textContent = me.text;
			me.txt.textContent = me.text;
			me.bar.style.width = me.width;
		};

		this.glareS = (flag) => (me.glare.style.opacity = flag ? "1" : "0");
	};
})();


(async function () {
	if (document.title != "Image Downloader") return console.log("not imgD");

	// while (typeof progressBar == "undefined")
	// 		await new Promise((res) => setTimeout(res, 500));

	const pb = new progressBar();
	const dblk = (...tags) =>
		tags.forEach((tag) => (tag.style.display = "block"));

	const getsc = (s, dd) => {
		let sc = {
			// status Codes
			1: "Job Started",
			2: "Fetching html",
			3: "Downloading imgs " + "(" + dd + ")",
			4: "Zipping Files",
		};
		return sc[s];
	};

	const imgD = (url = false) => {
		url = url || document.querySelector("#website_url").value;
		if (!url) return;
		dbtn();
		dblk(qs("#pbc"), pb.glare);
		fetch("/imgD", {
			method: "POST",
			headers: new Headers({ "Content-Type": "application/json" }),
			body: JSON.stringify({ url: url }),
		})
			.then((res) => res.json())
			.then((data) => logger(data, url));
	};

	function logger(data, url) {
		let { status, done, dlnk = false, downloading: dd } = data,
			w = done
				? "100%"
				: status == 3 && dd != "0/0"
				? eval(dd) * 100 + "%"
				: (status / 5) * 100 + "%",
			t = done ? "Ready To Download !" : getsc(status, dd);
		pb.update({ text: t, width: w });
		done ? (dbtn(dlnk), hide(pb.glare)) : setTimeout(() => imgD(url), 1000);
	}

	function dbtn(url) {
		let dbtnc = qs("#dbtnc");
		url ? dblk(dbtnc) : hide(dbtnc);
		qs("#dbtn").href = url;
	}

	async function onload(cb, ...args) {
		while (document.readyState != "complete")
			await new Promise((res) => setTimeout(res, 500));
		if (args.length) cb(...args);
		cb();
	}

	// log("Adding form handler !")
	onload(() => {
		pb.init(document.querySelector("#pbc"));
		let form = document.querySelector("#siteURL_form");
		// console.log("configuring the form submit event ...");
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			imgD();
		});
	});
})();
