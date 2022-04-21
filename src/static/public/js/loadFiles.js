const cacheF = {
	files : [],
	av : localStorage.getItem("fileV") || 0,
	getF : function (url, f ) { return new Promise( res => {
		if ( f ) fetch(url)
					.then(d => d.text())
					.then(t => localStorage.setItem(url, t, res(t),this.logs.push("L " + url.split("/").at(-1))))
		else res(( localStorage.getItem(url) || "" ), this.logs.push("C " + url.split("/").at(-1)))
	})},
	logs : [],
	init : async function ({logging = false, appV = 0, ignore = [], cb = () =>{}, uc = false}) { // use cache
		this.logs = [];
		let f = !appV || this.av != appV
		if ( uc ) f = !1;
		for( let file of this.files ) {
			if ( ignore.includes(file)) continue;
			let data = await this.getF( file , f)
			if ( file.endsWith(".js")) eval(data);
			else if ( file.endsWith(".css")) document.body.innerHTML += `<style>${data}</style>`;
		}
		if (logging ) console.log(this.logs)
		localStorage.setItem("fileV", appV)
		if (typeof cb == "function") return cb()
		return;
	}
}