(async function () {
	if (document.title != "WhatsUp") {
		delete window.t_fab;
		delete window._show_users;
		return;
	}

	window.t_fab = {
		fab_opts : $(".fab-opts"),
		btn : $(".fab > [icon=plus]"),
		off : function () {
			this.btn.style.transform = 'rotate(0deg)';
			this.fab_opts.style.height = '0';
			this.fab_opts.style.opacity = '0';
		},
		on : function () {
			this.btn.style.transform = 'rotate(225deg)';
			this.fab_opts.style.height = 55 * 3 + 'px';
			this.fab_opts.style.opacity = '1';
		},
		t : function (cb) {
			const isOn = this.fab_opts.style.opacity == '1';
			isOn ? this.off() : this.on();
			if ( typeof cb == 'function') cb();
		}
	}

	window.t_usr = async () => {
		$("#chat-list").style.opacity = 0;
		await wait(200);
		$("#chat-list").style.display = "none";
		$("#user-list").style.display = "block";
		await wait(10);
		$("#user-list").style.opacity = 1;
		log($("#user-list").innerHTML);
	}
	
	// for(let i=0; i<50; i++) $("#chat-list").innerHTML += ($(".chat").outerHTML)
	// log($("#chat-list"))

	
})();
