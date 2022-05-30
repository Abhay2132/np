(async function () {
	if ( document.title != "WhatsUp") return;
	qs("#mainNav").style.background = "#008069"
	qs("#mainNav").style.color = "#ddd"
	
	let ncb = qs("#new-chat")
	function tncd () { // toggle new chat dialog
		let db = qs("#new-chat-dialog");
		let cl = qs("#chat-list");
		let isOn = db.style.display != "none" && cl.style.display == "none";
		if ( isOn ) {
			db.style.display = "none"; db.style.transform = "scale(0.5)";
			cl.style.opacity = "0";cl.style.display = "block";
			ncb.style.transform = "rotate(0deg)";ncb.style.background = "#008069"
			setTimeout(() => {cl.style.opacity = "1";cl.style.transform = "scale(1)";}, 0)
		}
		if ( ! isOn ) {
			db.style.opacity = "0";db.style.display = "block"
			cl.style.display = "none"; cl.style.transform = "scale(0.5)";
			ncb.style.transform = "rotate(45deg)";ncb.style.background = "#C51F00";
			setTimeout(() => {db.style.opacity = "1"; db.style.transform = "scale(1)";}, 0)
		}
	}
	
	function tbtn () { // toggle btn
		let isOn = this.style.transform == "translateY(3px)";
		let s = this.style;
		let clr = "#008069";
		//log(s.transform);
		if ( isOn ) {
			s.fontWeight = "300";
			s.color = "#333";
			s.transform = "translateY(0px)"; 
			s.boxShadow = "0px 4px 1px #555";
			this.state = "off"
		}
		if ( ! isOn ) {
			s.fontWeight = "500";
			s.color = clr;
			s.transform = "translateY(3px)"; 
			s.boxShadow = "0px 1px 1px #555";
			this.state = "on";
		}
	}
	
	ncb.addEventListener("click", tncd);
	qsa("#nco > div").forEach(d => d.addEventListener('click', tbtn))
})();
