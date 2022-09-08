(function () {
	if ( document.title != "File Downloader" ) return;
	
	$(".fd-form").addEventListener("submit", () =>{
		location.href = "/pipe?link=" +
			$(".fd-url").value +
			"&ff=" +
			$("#ff").checked
	});
})();