const cacheF = {
	files : [],
	av : parseInt(localStorage.getItem("fileV") || "0"),
	lsS : () => {let s = 1; try { localStorage.getItem(""); } catch(e) { s = !1; } return s;},
	getF : function (url, f ) { return new Promise( res => {
		if ( f ) fetch(url)
					.then(d => d.text())
					.then(t => this.lsS() ? localStorage.setItem(url, t, res(t), this.getM = "L") : (res(t), this.getM = "L"))
		else {res(localStorage.getItem(url) || "" ); this.getM = "C";}
	})},
	logs : [],
	init : async function ({logging = false, appV = 0, ignore = [], cb = () =>{}, uc = false, ex = "main"}) { // use cache
		this.logs = {appV, files : [], ignore, ex}
		let sT = Date.now();
		let f = !appV || this.av != appV
		if ( uc ) f = !1;
		for( let file of this.files ) {
			if ( ignore.includes(file)) continue;
			let st = Date.now()
			let data = await this.getF( file , f);
			if ( file.endsWith(".js")) eval(data);
			else if ( file.endsWith(".css")) document.body.innerHTML += `<style>${data}</style>`;
			this.logs.files.push(this.getM + " : " + file.split("/").at(-1) + " "+(Date.now() - st) +"ms")
		}
		if (logging ) (this.logs.timeE = (Date.now() - sT) +"ms", console.log(this.logs))

		localStorage.setItem("fileV", appV)
		if (typeof cb == "function") return cb()
		return;
	}
}