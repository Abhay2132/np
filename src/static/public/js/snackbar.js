(async function() {
	window.snkbr = {
		cb: false,
		hideAfter : 5000,
		timeout : false,
		async show(text, hideAfter, cb) {
			if ($('.snackbar-container').style.display== "block") return ;
			$('.sb-body').textContent = text;
			$('.snackbar-container').style.display= "block";
			$('.snackbar-border').style.animationDuration = hideAfter+"ms";
			await wait(10);

			$('.snackbar').style.bottom = '0px';

			cb && (this.cb = cb);
			await wait(hideAfter || this.hideAfter);
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
	const w = window.innerWidth - 4;
	const fs = 18;

	const svg = `
<svg width='${w}' height="40">
<path class="snackbar-border"
d="M 1 1 , H ${w-1} , V 39 , H 1 , L 1 1 " 
/>
<text x='14' y='${17+fs/2}'
	style="font:normal ${fs}px arial; stroke-width:0; fill : #333;"
 class="sb-body"></text>
</svg>
	`
	$(".snackbar").innerHTML = svg;

	await wait(5);
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
	if (!0) {
		log("Starting SERVER !")
		snkbr.show("Starting SERVER ...", 60000);
		fetch("/")
		.then(async a => {
			await snkbr.hide();
			snkbr.show("Server ONLINE ;D", 2000);
			window.sessionStorage.setItem("serverOnline", true);
		})
	}
})();