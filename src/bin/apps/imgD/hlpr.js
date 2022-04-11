
function fetch ( url ) {
	return new Promise ( res => {
		require("child_process").exec(`curl "${url}"`, (err, stdout, stderr) => res(stdout))
	})
}


module.exports  = {
	fetch : fetch,
}