(async function () {
	let icons = {
		user : `<svg viewBox="0 0 100 100"><circle cx="50%" cy="50%" r="45"/><path d="M 22 80 A 20 20 0 0 1 78 80" /><circle cx="50" cy="33" r="17" /></svg>`
	};

	function setIcons() {
		for (let icon of document.querySelectorAll("div[icon]")) {
			let name = icon.getAttribute("icon") || false;
			if (name) icon.innerHTML = icons[name];
		}
	}

	setIcons();
	window.setIcons = setIcons;
})();
