const cacheF = {
	files : [],
	av : localStorage.getItem("appV") || 0,
	getF : (url, f ) => new Promise( res => {
		if ( f ) fetch(url)
					.then(d => d.text())
					.then(t => localStorage.setItem(url, t, res(t),cacheF.logs.push("L " + url.split("/").at(-1))))
		else res(( localStorage.getItem(url) || "" ), cacheF.logs.push("C " + url.split("/").at(-1)))
	}),
	logs : [],
	init : async (logging = false, appV = 0) => {
		let f = !appV || cacheF.av !== appV
		for( let file of cacheF.files ) {
			let data = await cacheF.getF( file , f)
			if ( file.endsWith(".js")) eval(data);
			else if ( file.endsWith(".css")) document.body.innerHTML += `<style>${data}</style>`;
		}
		if (logging ) console.log(cacheF.logs)
		localStorage.setItem("appV", appV)
	}
}