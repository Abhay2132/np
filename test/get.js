const https = require("http");
const uri = "http://localhost:3000/getcj"

const req = https.get(uri, (res) => {
	console.log(res.headers, res.statusCode);
	//res.on("data", c => process.stdout.write(c.toString()));
})