(async function () {
	while(true) {
	await new Promise(r => setTimeout(r, 100));
	try {
	let req = await fetch("/reload");
	let res = await req.json();
	let {reload} = res;
	if ( reload ) postMessage({reload})
	} catch (e) {}
	}
})()