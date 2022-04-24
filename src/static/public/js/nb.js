(async function () {
	if (document.title != "NoteBook") return;
	
	let book = qs(".book").cloneNode(true)
	window.setView = function (viewType) {
		let viewT = qs("#viewType");
		let clr = "#bbb";
		if (viewType == "list") {
			viewT.children[0].style.background = clr;
			viewT.children[1].style.background = "transparent";
		} else if (viewType == "grid") {
			viewT.children[0].style.background = "transparent";
			viewT.children[1].style.background = clr;
		}
	};

	setView("grid");

	var $$ = (q) => qsa(q),
		$ = (q) => qs(q);

	let n = {};
	Object.defineProperty(n, "b", {
		get: function () {
			return qs(".DBC");
		},
	});
	//let bookWidth = screen.width * 0.32 - 15;
	//qs("#nb-book-style") || (document.body.innerHTML += `<STYLE id ="nb-book-style">.book { width : ${bookWidth}px; }</STYLE>`);
	window.refreshBookshelf = async function () {
		let books = JSON.parse(localStorage.getItem("books") || "[]");
		let bs = $(".bookshelf");
		bs.innerHTML = "";
		books.forEach((book) => (bs.appendChild(createBook(book))))//.innerHTML += createBook(book)));
		setIcons();
		for (let b of bs.children) {
			await new Promise((res) => setTimeout(res, 100));
			b.style.opacity = "1";
			b.style.top = "0";
		}
	};

	refreshBookshelf();
	
	window.appendBook = async function ( book = false ) {
		if ( ! book ) return;
		let b = createBook ( book );
		$(".bookshelf").appendChild(b)
		setIcons();
		await new Promise((res) => setTimeout(res, 100));
		b.style.opacity = "1";
		b.style.top = "0";
	}

	window.hideAllDB = async (wait4 = 0) => {
		await new Promise((res) => setTimeout(res, wait4));
		for (let db of $$(".DB")) {
			db.style.opacity = "0";
			db.style.top = "100px";
		}
		for (let dbc of $$(".DBC"))
			setTimeout(() => (dbc.style.display = "none"), 190);
		$$(".iconList > div").forEach(
			(ic) => (ic.style.background = "transparent")
		);
	};

	for (let c of $$(".DBC")) c.children[0].addEventListener("click", hideAllDB);

	$("#addNew").addEventListener("click", () => {
		let db = $("#bkfrm");
		$("#cnb").style.display = "flex";
		setTimeout(() => ((db.style.opacity = "1"), (db.style.top = "-50px")), 50);
	});

	$$(".iconList > div").forEach((i) =>
		i.addEventListener("click", () => {
			$$(".iconList > div").forEach(
				(ic) => (ic.style.background = "transparent")
			);
			i.style.background = "#777";
		})
	);

	window.createNB = function () {
		let books = JSON.parse(localStorage.getItem("books") || "[]");
		let name =  $("#bn").value,
			bg = $("#bbg").value,
			color = $("#bc").value,
			icon = "";
		$$(".iconList > div").forEach((i) => {
			if (i.style.background == "rgb(119, 119, 119)")
				icon = i.getAttribute("icon");
		});
		name = isValidName(name) ? name : !1;
		
		if (!(name && color && icon && bg)) return log({ name, color, icon, bg });
		books.push({ name, color, icon, bg });
		localStorage.setItem("books", JSON.stringify(books));
		hideAllDB();
		appendBook({ name, color, icon, bg });
		$("#bn").value = ""
	};

	function createBook ({ name, color, icon, bg }) {
		let b = book.cloneNode(true);
		b.style.background = bg;
		b.style.color = color;
		let ic = b.children[0].children[0]
		ic.setAttribute("icon", icon)
		ic.setAttribute("icon-sc", color);
		b.children[1].textContent = name;
		return b;
	}

	function isValidName ( name ) {
		let books = JSON.parse(localStorage.getItem("books") || "[]");
		for(let book of books ) {
			if ( book.name == name ) return false;
		}
		return true;
	}
	
		$("#bn").addEventListener("keyup", function () {
			let isValid = isValidName(this.value) 
			this.style.background = isValid? "#fff" : "#C50E00";
			this.style.color = !isValid ? "#fff" : "#333";
			if ( isValid ) {
				$(".bnErrPre").style.display = "none";
				$("#bnErr").style.display = "none";
			} else {
				$(".bnErrPre").style.display = "block";
				$("#bnErr").style.display = "block";
			}
			
		})
})();
