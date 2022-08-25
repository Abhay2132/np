const {get_css, get_js} = require("./hlprs");

module.exports = async function (req, res) {
	var data = {};
	data.css = await get_css();
	data.js = await get_js();
	res.json(data);
}