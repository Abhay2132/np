(async function() {
	delete window.t_uc;

	window.t_uc = {
		uc : $(".uc-menu"),
		off : async function(){
			this.uc.style.opacity = 0;
			this.uc.style.transform = "translateY(20px)";
			await wait(300);
			this.uc.style.display = "none";
		},
		on : async function(){
			this.uc.style.display = 'block';
			await wait(1);
			this.uc.style.opacity = 1;
			this.uc.style.transform = "translateY(0px)";
		},
		t : function(){
			const isOn = this.uc.style.transform == "translateY(0px)";
			isOn ? this.off() : this.on();
		}
	}

	t_uc.off();
})();