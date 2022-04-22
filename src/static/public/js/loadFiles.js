const cacheF = {
	files : [],
	av : localStorage.getItem("fileV") || 0,
	getF : function (url, f ) { return new Promise( res => {
		if ( f ) fetch(url)
					.then(d => d.text())
					.then(t => localStorage.setItem(url, t, res(t)))
		else res(localStorage.getItem(url) || "" )
	})},
	logs : [],
	init : async function ({logging = false, appV = 0, ignore = [], cb = () =>{}, uc = false}) { // use cache
		this.logs = [];
		let sT = Date.now();
		let f = !appV || this.av != appV
		if ( uc ) f = !1;
		for( let file of this.files ) {
			if ( ignore.includes(file)) continue;
			let st = Date.now()
			let data = await this.getF( file , f);
			if ( file.endsWith(".js")) eval(data);
			else if ( file.endsWith(".css")) document.body.innerHTML += `<style>${data}</style>`;
			this.logs.push(file.split("/").at(-1) + " "+(Date.now() - st) +"ms")
		}
		if (logging ) (this.logs.push("Total Time : "+ (Date.now() - sT) +"ms"), console.log(this.logs))
		localStorage.setItem("fileV", appV)
		if (typeof cb == "function") return cb()
		return;
	}
}