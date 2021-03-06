(async function () {
	window.log = (...a) => console.log(...a);
	window.elog = (...a) => console.error(...a);
	const wait = (n) => new Promise((res) => setTimeout(res, n));

	window.pressed = function (tag, bs = false) {
		tag.style.transition = "0.2s";
		tag.style.transform = "translateY(3px)";
		if (bs) tag.style.boxShadow = "0px 1px 1px #666";
		setTimeout(() => {
			tag.style.transform = "translateY(0px)";
			if (bs) tag.style.boxShadow = "0px 4px 1px #666";
		}, 300);
	};

	window.post = async function (url) {
		let data = document.querySelector("#data-in").value;
		if (!data) return;
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		let req = await fetch(url, {
				method: "POST",
				headers: myHeaders,
				body: JSON.stringify({ data: data }),
			}),
			res = (await req.json()) || {};
		disp(res);
	};

	window.read = async function () {
		let res = await fetch("fs/read"),
			data = (await res.json()) || {};
		disp(data);
	};

	window.disp = function ({ text = false }) {
		if (!text) return;
		let out = document.getElementById("data-out");
		tw.w(out, text);
	};

	window.tw = {
		// tw means typeWriter
		live: false,
		w: async (tag, txt) => {
			if (!(tag && txt)) return;
			if (tw.live) await tw.kill();
			tw.live = tw.live || true;
			tag.textContent = "";
			for (let i = 0; i < txt.length; i++) {
				if (tw.stop) break;
				tag.textContent += txt[i];
				await wait(0);
			}
			tw.live = false;
		},
		kill: () =>
			new Promise(async (res) => {
				tw.stop = true;
				while (true) {
					if (!tw.live) break;
					await wait(10);
				}
				tw.stop = false;
				return res();
			}),
	};

	const newTag = (name) => document.createElement(name);
})();
