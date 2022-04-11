
let isUpdated = (v) => {
	let lsvv = JSON.parse(localStorage.getItem("viewVersions") || "{}")
	if ( ! Object.keys(lsvv).includes("view/"+v+".hbs")) return false;
	
	return lsvv["view/"+v+".hbs"] == views["view/"+v+".hbs"]
}

async function setView ( view , noPush = false ) {
	if ( ! view ) return log("getView.js : view not defined !")
	//if ( view == "index") thmbgr(tsp)
	let data = await getV(view, ! isUpdated(view))
	if ( data.error ) return log(data.error)
	
	let {title} = data
	qs(".viewport").innerHTML = data.body
	document.title = title
	qs("#mainH").textContent = data.mainHeading || "NODE EXPRESS Practice"
	loadF.init(vs)
	
	if ( ! noPush ) window.history.pushState({view}, "", "/"+view)
}

async function getV (view, f=false, logs = false) {
	//console.log("fetching view forcely", f)
	let data = {}
	if (f) {
		let req = await fetch("/getView", {
			method : "POST",
			headers : new Headers({"Content-Type" : "application/json"}),
			body : JSON.stringify({view})
		})
		data = await req.json()
		localStorage.setItem("view/"+view, JSON.stringify(data))
		if ( logs ) return "L"
		return data
	}
	else {
		data = JSON.parse(localStorage.getItem("view/"+view))
		if ( logs ) return "C"
	}
	return data
}

async function loadViews2ls () {
	let lsvv = JSON.parse(localStorage.getItem("viewVersions") || "{}")
	let logs = []
	for(let view in views) {
		view = view.split("/")[1].split(".")[0]
		let l = await getV(view, !isUpdated(view), 1)
		logs.push(l + " "+ view)
	}
	localStorage.setItem("viewVersions", JSON.stringify(views))
	console.log(logs)
}

//configAnchors()
loadViews2ls ()
	
	window.onpopstate = function ( state ) {
		let {view = false} = state.state || {}
		if ( view ) setView(view, 1) 
	};
	
	(function () {
		let view = (location.href).toString()
		view = view.split("/")[3].split("?")[0]
		window.history.pushState({view}, "", view)
	})()