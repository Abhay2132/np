(async function () {
if ( document.title != "NoteBook" ) return; 
	
window.setView = function ( viewType ) {
	let viewT = qs("#viewType");
	let clr = window.matchMedia("(prefers-color-scheme: dark)").matches ? "#fff" : "#bbb";
	if ( viewType == "list" ) {
		viewT.children[0].style.background = clr
		viewT.children[1].style.background = "transparent"
	} else if ( viewType == "grid" ) {
		viewT.children[0].style.background = "transparent"
		viewT.children[1].style.background = clr
	}
}

setView("grid")

var $$ = q => qsa(q),
	$ = q => qs(q)
		
let n = {}
Object.defineProperty(n, 'b', {	
		get: function() {
    	return qs(".DBC");
	}
});
let bookWidth = screen.width * 0.32 - 15;
document.body.innerHTML += `<STYLE>.book { width : ${bookWidth}px; }</STYLE>`
window.refreshBookshelf = async function () {
	let books = JSON.parse(localStorage.getItem("books") || "[]")
	let bs = qs(".bookshelf");
	bs.innerHTML = ""
	books.forEach(book => bs.innerHTML += createBook(book))
	setIcons();
	for(let b of bs.children) {
		await new Promise ( res => setTimeout(res , 100))
		b.style.opacity = "1"
		b.style.top = "0"
	}
}

refreshBookshelf()
	
window.hideAllDB = async (wait4 = 0) => {
	await new Promise (res => setTimeout(res , wait4))
	for(let db of $$(".DB")) {
		db.style.opacity = "0";
		db.style.top = "100px";
	}
	for(let dbc of $$(".DBC")) setTimeout(() => dbc.style.display = "none", 190); 
	$$(".iconList > div").forEach( ic => ic.style.background = "transparent" )
}
	
for(let c of $$(".DBC")) c.children[0].addEventListener("click", hideAllDB)
	
$("#addNew").addEventListener("click", () => {
	let db = $("#bkfrm");
	$("#cnb").style.display = "flex";
	setTimeout(() => (db.style.opacity = "1", db.style.top = "-50px"), 50)
})
	
$$(".iconList > div").forEach( i => i.addEventListener("click", () => {
		$$(".iconList > div").forEach( ic => ic.style.background = "transparent" )
		i.style.background = "#777";
	})
)
	
window.createNB = function () {
	let books = JSON.parse(localStorage.getItem("books") || "[]")
	let name = $("#bn").value,
		bg = qs("#bbg").value,
		color = qs("#bc").value,
		icon = ""
	$$(".iconList > div").forEach( i => {
		if ( i.style.background == "rgb(119, 119, 119)") icon = i.getAttribute("icon")
	})
	if ( ! (name && color && icon && bg)) return log({name, color, icon, bg})
	books.push({name, color, icon, bg})
	localStorage.setItem("books", JSON.stringify(books));
	hideAllDB ()
	refreshBookshelf()
}
	
function createBook ( {name, color, icon, bg } ) {
	return `
<div class="grid book ovrflw-hdn st" style="background: ${bg}; color : ${color};">
	<div class="h-50p p-B m bdr-B midl pos-rel bookIcon hbr(chd-section(top-_10p)) ">
		<div icon="${icon}" icon-sc="${color}" class="h-40p w-40p" ></div>
		<section class="f-c-c bookMenu chd(m-0px_5px,bb,hbr(lthm,rc-s),p-s,t-c) pos-abs top-_159p st h-120p dnw w-100 rc-0px_0px_3px_3px f-15p">
			<div>Open</div>
			<div>Settings</div>
		</section>
	</div>
	<div class="bookName t-c m-xs bb wwrp-brkw h-50p ovrflw-scrl" >
		${name}
	</div>
</div>
`;
}


})();