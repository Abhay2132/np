const cacheF = {
	files : [],
	vs : JSON.parse(localStorage.getItem("versions") || "{}"),
	getF : (url, f ) => new Promise( res => {
		if ( f ) fetch(url)
					.then(d => d.text())
					.then(t => localStorage.setItem(url, t, res(t),cacheF.logs.push("L " + url.split("/").at(-1))))
		else res(( localStorage.getItem(url) || "" ), cacheF.logs.push("C " + url.split("/").at(-1)))
	}),
	logs : [],
	init : async (v, logging = false) => {
		let newVs = {}
		for( let file of cacheF.files ) {
			let data = await cacheF.getF( file , cacheF.vs[file] !== v[file])
			if ( file.endsWith(".js")) eval(data);
			else if ( file.endsWith(".css")) document.body.innerHTML += `<style>${data}</style>`;
			newVs[file] = v[file];
		}
		if (logging ) console.log(cacheF.logs)
		localStorage.setItem("versions", JSON.stringify(newVs))
	}
}