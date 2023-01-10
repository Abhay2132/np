const {parse} = require("node-html-parser");
const {imgFilter} = require("./hlpr");

const err = (error, res) => {
	elog({error})
	res && res.json({error})
}

const filterRes = (token) => {
	let session = imgDsessions[token]
	clearTimeout(session.kill);
	session.kill = setTimeout(() => (delete session), 300000)
	let {title, imgs} = session;
	return {title, imgs : imgs.length, token}
}

async function imgD (req,res){
	const {link = false} = req.body;
	var {imgD_token = false} = req.cookies;
	let error = false

	if(imgD_token && imgDsessions.hasOwnProperty(imgD_token))
		return res.json(filterRes(imgD_token));

	if(!link) return err("'link' not defined in req.body !", res);

	var fetch = (await import("node-fetch")).default;
	try{
		var html = await (await fetch(link)).text();
	}catch(e){error = e;}
	if(error) return err(e.code, res);
	const dom = await parse(html);
	var imgs = (dom.querySelectorAll("img") || []).map((img, i) => imgFilter(img, link, i));
	const title = dom.querySelector("title").textContent;
	
	let token = (performance.now()+"").split(".").join("");
	imgDsessions[token] = {title, imgs, token, kill : setTimeout(() => (delete imgDsessions[token]), 300000)};

	res.cookie("imgD_token", token, {maxAge : 6000})
	return res.json({title, imgs : imgs.length, token});
}

function dl (req, res) {

}

module.exports = {
	imgD,
	dl
}

/*
curl -H 'Content-Type: application/json' -X POST http://localhost:3000 -d '{ "title":"foo","body":"bar", "id": 1}' 
*/