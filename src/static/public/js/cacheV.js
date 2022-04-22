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

async function setView ( view , ps = 1) {
	let v = await getV(view);
	let { body , title , mainHeading } = v;
	qs("#body").innerHTML = body;
	document.title = title;
	qs("#mainH").textContent = mainHeading;
	if ( isDev ) log("running js")
	await loadF.init({logging : isDev, __appV, ignore : ["js/cacheV.js"], uc : 1})
	ca()
	if (ps) history.pushState({view}, "", view)
}

function ca () {
	if ( isDev ) log("Configuring anchors")
	for(let a of qsa("a")) {
		let view = a.getAttribute("view") || false 
		if ( ! view ) continue;
		a.addEventListener("click", async function (e){
			e.preventDefault();
			await setView ( view );
			if ( view == "index") thmbgr(tsp)
		});
	}
}

history.pushState({ view : location.href.split("/").at(-1).split("?")[0].split(".")[0] } , "", "")

window.onpopstate = async function (e) {
	await setView(e.state.view, 0)
}

ca();




})()