(async function () {
	if ( document.title != "File Downloader" ) return;
	
	if (!$("#socket_script")) await new Promise(r => {
		const script = document.createElement("script")
		script.src = "/socket.io/socket.io.js";
		script.id = "socket_script";
		document.body.appendChild(script);
		script.onload = () => r();
	})
	if ( !window.socket) window.socket = io();
	
	$(".fd-form").addEventListener("submit", () =>{
/*
		location.href = "/pipe?link=" +
			$(".fd-url").value +
			"&ff=" +
			$("#ff").checked
*/	
		if ( $("#dd").checked ) return (location.href = "/pipe?link="+$(".fd-url").value);
		$(".fd-dbtn").style.opacity = 0;
		let url = $(".fd-url").value;
		
		socket.emit("download", {url});
		socket.on("fd_done" , ({link}) => {
			$(".fd-dbtn").style.opacity = 1;
			$(".fd-dbtn").textContent = "Download Ready";
			$(".fd-dbtn").onclick = () => location.href = `/fd/download?file=${link}`;
		});
		socket.on("fd_progress", ({progress}) => {
			$(".fd-dbtn").style.opacity = 1;
			$(".fd-dbtn").textContent = "Downloading : " + progress;
		});
	});
})();