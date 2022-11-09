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
		$("#imgD-loading").classList.replace("hide-loader","show-loader");
	}
	
	socket.on("imgD-imgs", async ({title, num})=> {
		//await wait(1000);
		$("#imgD-loading").classList.replace("show-loader","hide-loader");
		$("#img-title").textContent = title;
		$("#img-num").textContent = num+ " imgs found";
	});
})();