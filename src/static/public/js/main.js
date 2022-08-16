(async function () {
	window.log = (...a) => console.log(...a);
	window.elog = (...a) => console.error(...a);

	window.pressed = function (tag, bs = false) {
		tag.style.transition = "0.2s";
		tag.style.transform = "translateY(3px)";
		if (bs) tag.style.boxShadow = "0px 1px 1px #666";
		setTimeout(() => {
			tag.style.transform = "translateY(0px)";
			if (bs) tag.style.boxShadow = "0px 4px 1px #666";
		}, 300);
	};

	const newTag = (name) => document.createElement(name);
})();
