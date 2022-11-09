const { EventEmitter } = require('node:events');

class Abhay extends EventEmitter {
	constructor() {
		super();
		this.start();
	}
	
	start () {
		setTimeout(() => this.emit("a", { name : "Abhay" } ), 1000);
	}
}

const a = new Abhay ();
a.on("a", console.log)
//a.start();