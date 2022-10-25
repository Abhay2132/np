(async function() {
	const wid = window.matchMedia("(max-width: 700px)").matches ? window.innerWidth - 5 : window.innerWidth * 0.4 ;
	window.snkbr = {
		cb: false,
		hideAfter : 5000,
		timeout : false,
		ps : [],
		killed : false,
		async show(text, hideAfter=this.hideAfter, cb) {
			if ($('.snackbar-container').style.display== "block") return ;
			const bdr = $('.snackbar-border');
			$('.sb-body').textContent = text;
			this.text = text;
			$('.snackbar-container').style.display= "block";
			bdr.style.strokeDashoffset = length;
			bdr.style.animationName = "dash";
			bdr.style.animationDuration = hideAfter+"ms";
			await wait(10);

			$('.snackbar').style.bottom = '0px';

			cb && (this.cb = cb);
			this.timeout = setTimeout(this.hide, hideAfter);
			await wait(hideAfter);
		},
		async hide() {
			(!!this.timeout && clearTimeout(this.timeout));
			this.timeout = false;
			$('.snackbar').style.bottom = '-100px';
			(!!this.cb && this.cb()) || (this.cb = false);
			await wait(300);
			$('.snackbar-container').style.display= "none";
			$(".snackbar-border").style.animationName = "abhay"

		}
	}

	const fs = 18;
	const svg = `
		<svg width='' height="40" id='snackbar-svg'>
		<path class="snackbar-border"
			d="M 1 1 , H ${wid-1} , V 39 , H 1 , L 1 1 " 
		/>
		<text x='14' y='${17+fs/2}'
			style="font:normal ${fs}px arial; stroke-width:0;"
 			class="sb-body"></text>
		</svg>
	`
	$(".snackbar").innerHTML = svg;
	$(".snackbar").style.width = wid + "px";
	$("#snackbar-svg").setAttribute("width", wid)
	await wait(50);
	const length = $('.snackbar-border').getTotalLength();
	console.table({length})
	document.body.innerHTML += `
	<style>
		.snackbar-border {
			stroke-dasharray: ${length};
			stroke-dashoffset: ${length};
			animation: dash ${snkbr.hideAfter/1000}s linear 1 forwards;
		}

		@keyframes dash {
			from {stroke-dashoffset: ${length};}
			to { stroke-dashoffset : 0;}
		}
	</style>
	`
	await wait(10);
	const serverOnline = window.sessionStorage.getItem("serverOnline");
	if (!serverOnline) {
		log("Starting SERVER !")
		snkbr.show("Starting SERVER ...", 60000);
		await wait(2000);
		fetch("/")
		.then(async a => {
			await snkbr.hide();
			await snkbr.hide();
			snkbr.show("Server ONLINE ;D", 2000);
			window.sessionStorage.setItem("serverOnline", true);
		})
	}

})();