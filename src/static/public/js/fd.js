(function () {
	if ( document.title != "File Downloader" ) return;
	
	const socket = io();
	
	$(".fd-form").addEventListener("submit", () =>{
/*
		location.href = "/pipe?link=" +
			$(".fd-url").value +
			"&ff=" +
			$("#ff").checked
*/	
		let url = $(".fd-url").value;
		let mode = $("#ff").checked ? "ff" : "file";
		socket.emit("download", {url, mode});
		socket.on("fd_done" , ({link}) => {
			$(".fd-dbtn").textContent = "Download Ready";
			$(".fd-dbtn").onclick = () => location.href = `/fd/download?file=${link}`;
		});
		socket.on("fd_progress", ({progress}) => {
			$(".fd-dbtn").style.opacity = 1;
			$(".fd-dbtn").textContent = "Downloading : " + progress;
		});
	});
})();