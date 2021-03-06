(async function () {
	
const views = ["index", "fm","ytdl", "imgD", "nb"]

async function getV (view, f = 0) {
	let vd = localStorage.getItem(view+".hbs");
	if ( ! f && vd) return JSON.parse(vd);
	let req = await fetch("/getView", {
			method : "POST",
			headers : new Headers({"Content-Type" : "application/json"}),
			body : JSON.stringify({view})
		}),
		data = await req.json() || {};
	localStorage.setItem(view+".hbs", JSON.stringify(data))
	return data;
}

if ( __appV == 0 || __appV != parseInt(localStorage.getItem("viewV") || "0"))
	for(let v of views) await getV(v, 1);
localStorage.setItem("viewV", __appV);

async function setView ( view , ps = 1, ex) {
	let v = await getV(view);
	let { body , title , mainHeading } = v;
	qs("#body").innerHTML = body;
	document.title = title;
	qs("#mainH").textContent = mainHeading;
	if ( isDev ) log("setting View")
	await loadF.init({ex : "setView", logging : 0, appV : __appV, ignore : [], uc : 1})
	//ca("setView")
	if (ps) history.pushState({view}, "", view)
}

function ca (db) {
	if ( isDev ) log("Configuring anchors from" , db)
	for(let a of qsa("a")) {
		let view = a.getAttribute("view") || false 
		if ( ! view ) continue;
		a.addEventListener("click", async function (e){
			e.preventDefault();
			await setView ( view , 1);
			if ( view == "index") thmbgr(tsp)
		});
	}
}

window.onpopstate = async function (e) {
	await setView(e.state.view, 0)
}

ca("root");

})();