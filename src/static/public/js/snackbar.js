(async function() {
	window.snkbr = {
		cb: false,
		timeout : false,
		async show(text, hideAfter = 3000, cb) {
			if ($('.snackbar-container').style.display== "block") return ;
			$('.sb-body').textContent = text;
			$('.snackbar-container').style.display= "block";
			await wait(10);

			$('.snackbar').style.bottom = '0px';

			cb && (this.cb = cb);
			await wait(hideAfter);
			this.hide();
			// hideAfter && (this.timeout = setTimeout(this.hide, hideAfter));
		},
		async hide() {
			(!!this.timeout && clearTimeout(this.timeout));
			this.timeout = false;
			$('.snackbar').style.bottom = '-100px';
			(!!this.cb && this.cb()) || (this.cb = false);
			await wait(300);
			$('.snackbar-container').style.display= "none";
		}
	}

	const serverOnline = window.sessionStorage.getItem("serverOnline");
	if (!serverOnline) {
		log("Starting SERVER !")
		await snkbr.show("Starting SERVER ...");
		fetch("/")
		.then(async a => {
			await snkbr.hide();
			snkbr.show("Server ONLINE ;D");
			window.sessionStorage.setItem("serverOnline", true);
		})
	}
})();