(async function () {
	if (document.title != "File Downloader") return;

	if (!$("#socket_script"))
		await new Promise((r) => {
			const script = document.createElement("script");
			script.src = "/socket.io/socket.io.js";
			script.id = "socket_script";
			document.body.appendChild(script);
			script.onload = () => r();
		});
	if (!window.socket) window.socket = io();
	window.fd_form = () => {
		if(!$(".fd-url").value.startsWith("http")) return snkbr.show("Invalid URL !");
		if ($("#dd").checked)
			return window.open("/pipe?link=" + $(".fd-url").value);
		$(".fd-dbtn").style.opacity = 0;
		let url = $(".fd-url").value;

		socket.emit("download", { url });
		socket.on("fd_done", ({ link }) => {
			$(".fd-dbtn").style.opacity = 1;
			$(".fd-dbtn").textContent = "Download Ready";
			dlog(link)
			$(".fd-dbtn").onclick = () =>
				window.open(`/fd/download?file=${link}`);
		});
		socket.on("fd_progress", ({ progress }) => {
			$(".fd-dbtn").style.opacity = 1;
			$(".fd-dbtn").textContent = "Downloading : " + progress;
		});
		
		socket.on("fd-error", e => snkbr.show("Error : " + e));
	};
})();
