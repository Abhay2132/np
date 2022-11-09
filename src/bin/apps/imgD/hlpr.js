function imgFilter ( img , url ) {
	let src = img.getAttribute("src") || false;
	//dlog({src, url});
	if ( ! src ) return false;
	
	if(! src.includes("http")) {
		if ( url.at(-1) == "/") url = url.slice(0,-1);
		let host = url.split("/").slice(0,-1).join("/");
		src = src[0] == "/" ? host+src : host+"/"+src;
	}
	else src = src.slice(src.indexOf("http"));
	let name= img.getAttribute("alt") || src.split("/").at(-1).split("?")[0].slice(0, 30);
	
	//dlog({src, name});
	return {src, name};
}

const getTE = (n =3) => (performance.now()/1000).toFixed(3);

const validURL = url => {
	if (!url || !url.startsWith("http")) return false;
	return true;
}

module.exports = { imgFilter , getTE , validURL };