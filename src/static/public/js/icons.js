(async function () {
	let icons = {
		user : `<svg viewBox="0 0 100 100"><circle cx="50%" cy="50%" r="45"/><path d="M 22 80 A 20 20 0 0 1 78 80" /><circle cx="50" cy="33" r="17" /></svg>`,
		search : `<svg viewBox="0 0 100 100"><circle cx="40" cy="40" r="30"/><path d="M 62 62 L 80 80"/></svg>`,
		plus : `<svg viewBox="0 0 100 100"><path d="M 50 5 L 50 95 M 5 50 L 95 50"/></svg>`,
		group : `<svg viewBox="0 0 100 100" class="group" ><circle cx="50" cy="50" r="48" /><circle cx="22" cy="40" r="10" /><circle cx="50" cy="45" r="12" /><circle cx="78" cy="42" r="9" fill="#333"/><path d="M 30 80 A 15 15 , 0 0 1 , 70 80 M 65 60 A 12 12, 0 0 1, 88 64 M 12 64 A 12 12 , 0 0 1 , 35 60" />`
	};

	function setIcons() {
		for (let icon of document.querySelectorAll("[icon]")) {
			let name = icon.getAttribute("icon") || false;
			if( ! icons.hasOwnProperty(name)) continue;
			icon.innerHTML = icons[name];
		}
	}

	setIcons();
	window.setIcons = setIcons;
})();
