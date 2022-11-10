(async function () {
	if ( document.title != "Image Downloader" ) return;
	if (!$("#socket_script")) await new Promise(r => {
		const script = document.createElement("script")
		script.src = "/socket.io/socket.io.js";
		script.id = "socket_script";
		document.body.appendChild(script);
		script.onload = () => r();
	});
	if ( !window.socket) window.socket = io();
	
	var time = Date.now()
	//log("Adding evnt listener !");
	
	async function show (tag, {d,h,p,m}, delay) {
		if ( delay ) {
			tag.style.transition = delay + "ms";
			await wait(10);
		}
		if(d) tag.style.display = d
		if(h) tag.style.height = h
		if(p) tag.style.padding = p
		if(m) tag.style.margin = m
	}
	
	window.startImgD = async () => {
		const input = $("#website_url");
		const url = input.value;
		time = Date.now()
		socket.emit("imgD-start", {url});
		reset_imgd_ui ();
	}
	
	socket.on("imgD-imgs", async ({title, num})=> {
		//await wait(1000);
		$("#imgD-loading").classList.replace("show-loader","collapse");
		$("#img-title").textContent = title;
		$("#img-num").textContent = num+ " imgs found";
		$("#img-dl").textContent = `Saving 1 / ${num} ...`
		$("#imgD-info").classList.replace("collapse","show-info");
	});

	socket.on("imgD-err", async ({error}) => {
		$("#imgD-loading").classList.replace("show-loader","collapse");
		snkbr.show(error, 5000);
	});
	
	socket.on("imgD-done", ({len, uid}) => {
		//setTimeout(() => {
			$("#dl-ps").classList.replace("spinner-icon", "dl-icon");
			log("done");
			$("#img-dl").innerHTML = `Saved ${len} Fotos ...`
			$("#dl-btn-container").classList.remove('collapse');
			$("#imgD-dl").onclick = () => {location.href = "/imgD/dl?uid="+uid};
			$("#imgD-info").classList.replace("show-info","show-dl-cont");
	});
	
	socket.on("imgD-dl" , ({i, len}) => {
		log("dl");
		$("#img-dl").textContent = `Saving ${i} / ${len} ...`;
	});
	
	function reset_imgd_ui () {
		$("#imgD-ps").classList.remove("collapse")
		$("#imgD-loading").classList.replace("collapse","show-loader");
		$("#imgD-info").classList.replace("show-info","collapse");
		$("#imgD-info").classList.replace("show-dl-cont","collapse");
		$("#dl-ps").classList.replace("dl-icon", "spinner-icon");
	}
	
	
})();