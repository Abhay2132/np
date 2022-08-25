const _getCJ = {
	av: parseInt(localStorage.getItem("fileV") || "0"),
	getF : function () {
		return new Promise((res) => {
			let dataHandler = (t,a,w) => {
				var data= false, error = !1;
				try{ data = JSON.parse(t); } catch(e) {error = e;}
				if ( error ) return res({error});
				a(data);
				if (w) localStorage.setItem("CJ", t);
			};
			let cj = localStorage.getItem("CJ") || false;
			if ( this.av != __appV || isDev || ! cj) 
					fetch("/getCJ")
					.then((d) => d.text())
					.then((t) => dataHandler(t, res, 1))
					.catch (e => res({error : e}));
			else dataHandler(cj, res);
		});
	},
	init : async function (d = {}){ 
		const {a = false, cb=()=>{}} = d;
		if (a) console.time(a);
		const { css ='', js ='' , error = false} = await this.getF();
		if ( error) return console.log(error);
		const style = document.createElement("style");
		const script = document.createElement("script");
		style.innerHTML = css;
		script.innerHTML = js;
		document.body.appendChild(style);
		document.body.appendChild(script);
		if (a) console.timeEnd(a);
		cb();
	}
}
