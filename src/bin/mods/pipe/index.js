const ff = require("./ff"),
	{ _get} = require("../hlpr")
module.exports = async (req, res) => {
	let { link = false } = req.query;
	if ( ! link ) return res.status(404).json({error : 'link missing in query'});
	
	let stream = await _get({url : link, ret : true});
	
	if ( ! stream ) return res.end();
	log(stream.headers, stream.statusCode,req.query.ff);
	res.header("Content-Disposition",`attachment; filename=${basename(link)}`);
	let size = stream.headers['content-length'] || false
	if (size) res.header("Content-Length", size);
	if ( req.query.ff ) return ff(link, res);
	res.header("Content-Type", stream.headers['content-type'])
	stream.pipe(res);
}