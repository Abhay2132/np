(async function () {
	//postMessage({started : true})
	while (true) {
		await new Promise((r) => setTimeout(r, 50));
		try {
			let req = await fetch("/reload");
			let res = await req.json();
			let { reloadReq } = res;
			if (reloadReq) postMessage(JSON.stringify({ reloadReq: reloadReq }));
		} catch (error) {
			//postMessage({error});
			continue;
		}
	}
})();
