
(async function () {
	window._imgC = async function () {
		const _getDatURL = (name, src) =>
			new Promise(async (res) => {
				let lsc = localStorage.getItem(name) || false;
				if (lsc) return res(lsc);
				if (!lsc) res(src);
				fetch("/img", {
					body: JSON.stringify({ url: src }),
					headers: new Headers({ "Content-Type": "application/json" }),
					method: "POST",
				})
					.then((data) => data.text())
					.then((txt) => {
						txt = "data:image/jpeg;base64," + txt;
						res(txt);
						localStorage.setItem(name, txt);
					});
			});

		while (!["complete", "interactive"].includes(document.readyState))
			await new Promise((res) => setTimeout(res, 10));

		document.querySelectorAll("img").forEach(async (img) => {
			let src = img.getAttribute("data-src");
			if (!src) return;
			let name = src.split("/")[src.split("/").length - 1];
			img.src = await _getDatURL(name, src);
		});
	};

	_imgC();
})();


(async function (){ const prop1={p:"padding",m:"margin",rc:"border-radius",d:"display",bdr:"border",t:"text-align",w:"width",h:"height",f:"font-size",bg:"background",clr:"color",out:"outline",gtc:"grid-template-columns",gtr:"grid-template-rows",ff:"font-family",btm:"bottom",top:"top",left:"left",right:"right",ovrflw:"overflow",ovrflwX:"overflow-x",ovrflwY:"overflow-y",pos:"position",vcblt:"visibility",trns:"transition",bdr:"border",transf:"transform",fw:"font-weight",lst:"list-style",usr:"user-select",mh:"max-height",mw:"max-width",minw:"min-width",minh:"min-height",txtdc:"text-decoration",opct:"opacity",flxwrp:"flex-wrap",jc:"justify-content",ai:"align-items",ws:"white-space",wwrp:"word-wrap",gg:"grid-gap",bs:"box-shadow",crsr:"cursor",zi:"z-index",wrdbrk:"word-break",flxDir:"flex-direction"},prop2={T:"-top",B:"-bottom",L:"-left",R:"-right",lg:"",rgba:"",C:"-color",S:"-size"},val={xxs:"1px",xs:"3px",s:"5px",l:"15px",xl:"20px",xxl:"25px",xxxl:"30px",no:"none",b:"block",ib:"inline-block",flx:"flex",iflx:"inline-flex",c:"center",lft:"left",r:"right",100:"100%",0:"0%",drk:"#333",grd:"grid",n:"0px",ig:"inline-grid",hdn:"hidden",a:"auto",abs:"absolute",rel:"relative",vcbl:"visible",transp:"transparent",wrp:"wrap",spcb:"space-between",fxd:"fixed",nw:"nowrap",pntr:"pointer",scrl:"scroll",def:"default",brkall:"break-all",flxs:"flex-start",brkw:"break-word"},def="10px",spProp={flxWrp:{"flex-wrap":"wrap"},"f-c-c":{display:"flex","flex-direction":"column","justify-content":"center"},"f-r-c":{display:"flex","flex-direction":"row","justify-content":"center"},fsb:{display:"flex","flex-direction":"row","justify-content":"space-between"},bb:{"box-sizing":"border-box"},bnw:{"background-color":"#0095FF",color:"white"},dnw:{"background-color":"#333",color:"white"},lthm:{"background-color":"#fff",color:"#333","border-color":"#333"},bdr:{border:"1px solid"},"trns-txt":{background:"url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/990140/download.png)   -20px -20px fixed","-webkit-text-fill-color":"transparent","-webkit-background-clip":"text"},flxwrp:{"flex-wrap":"wrap"},dwnArw:{border:"10px solid rgba(0,0,0,0)",display:"inline-block","border-top-color":"#333",position:"relative",top:"0.5rem"},toc:{"transform-origin":"50% 50%"},tof:{"transform-origin":"0% 50%"},st:{transition:"0.3s"},midl:{display:"flex","justify-content":"center","align-items":"center"},btn_off:{border:"1px solid","border-radius":"5px","box-shadow":"0px 4px 0px #555",transform:"translateY(0px)"},btn_on:{border:"1px solid","border-radius":"5px","box-shadow":"0px 2px 0px #555",transform:"translateY(2px)"},not_btn:{border:"0px solid","border-radius":"5px","box-shadow":"0px 0px 0px transparent",transform:"translateY(0px)"},carousel:{"scroll-snap-type":"x mandatory","scroll-behavior":"smooth"},slide:{"scroll-snap-align":"center","flex-shrink":0},vc:{display:"flex","align-items":"center"},blrbg:{"backdrop-filter":"blur(5px)"}};var keys={prop1:Object.keys(prop1),prop2:Object.keys(prop2),val:Object.keys(val),spProp:Object.keys(spProp)};function onload(e,...t){setTimeout((function(){if("interactive"==document.readyState||"complete"==document.readyState)return e(...t);onload(e,...t)}),0)}function hlpr(){let e=this;this.jsonBeautify=function(t,r,s){s||(s=2),r||(r="json"),"object"==typeof t&&(t=JSON.stringify(t));var n="",l=0;r.length&&(n=r+" = ");let i=!1;for(let r of t)'"'===r&&(i=!i),"{"===r||"["===r?(l+=s,n+=r+"\n"+e.space(l)):"}"===r||"]"===r?(l-=s,n+="\n"+e.space(l)+r):n+=","===r?i?r:r+"\n"+e.space(l):r;return n},this.space=function(e){for(str="";e--;)str+=" ";return str},this.rndmStrGen=function(e){e=e||5;for(var t="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",s=r.length,n=0;n<e;n++)t+=r.charAt(Math.floor(Math.random()*s));return t},this.cls_spliter=function(e,t=","){let r="",s=0,n=new Array;for(let l of e)"("===l?s++:")"===l&&s--,t==l&&0==s?(n.push(r),r=""):r+=l;return n.push(r),n},this.obj_merger=function(e){let t={};for(let r of e)for(let e in r)t[e]=r[e];return t},this.chd_clsname_gen=function(e,t){let r=e.indexOf("(");var s=e.substring(0,r);return t+" > "+(s.length>3?s.split("-")[1].split("_").join(","):"*")},this.replaceAll=function(e,t,r=" "){if(!e)return!1;let s="";for(let n of e)s+=n===t?r:n;return s},this.transf_val_parser=function(t,r){var s="";if(t.includes("a"))for(let r of t.split("a"))s+=e.transf_val_parser(r)+" ";else t.startsWith("y")&&t.endsWith("p")?s="translateY("+(t=t.replace("_","-")).substring(1,t.length)+"x)":t.startsWith("x")&&t.endsWith("p")?s="translateX("+(t=t.replace("_","-")).substring(1,t.length)+"x)":t.startsWith("r")?s=(t=t.replace("r","rotate("))+"deg)":t.startsWith("s")&&(s=(t=(t=t.replace("d",".")).replace("s","scale("))+")");return r&&console.log("transf-parser : "+t+" -> "+s),s},this.get_chd_idntfyr=function(e,t){let r=e.id||!1,s=e.className.split(" ")||new Array;if(t&&log("tcls",":",s),r)return{tid:r,s:"#"};for(c of s)if(!("debug"==c||!c||(c.startsWith("mb(")||c.startsWith("chd(")||c.startsWith("pc(")||c.startsWith("tb("))&&c.endsWith(")")||keys.prop1.includes(c.split("-")[0])||keys.spProp.includes(c))){r=c,t&&log("! keys.prop1.includes(c) :",c);break}return t&&console.log("tid : ",r),{tid:r,s:"."}}}const log=(...e)=>console.log(...e);function acss(){const e=this;this.config=function(t,r){for(let r in t)e[r]||(e[r]=t[r]);"function"==typeof r&&r()},this.config({hlpr:new hlpr,prop1:prop1,prop2:prop2,val:val,def:def,def_bdr:"1px solid",spProp:spProp,added:new Array,keys:{},pc_brkpnt:"768px",tab_brkpnt:"600px",respStyle:"",classes:0,dd:"",styleTag:document.createElement("style")}),this.respStyleGen=function(t,r,s,n=!1){let l="\n@media only screen and ("+(n?"max":"min")+"-width:"+r+") {";for(let r of t)l+=e.genCls(r.tid,r.s_defs,2,r.s);return l+="}\n",s&&console.log("(respStyleGen) "+l),l},this.cv=function(e,t){if(Object.keys(e).length<1||e==={})return!1;for(let t in e)if(!e[t])return!1;return!0},this.genCls=function(t,r,s=0,n="."){var l="\n"+e.hlpr.space(s)+n+t+" {\n";for(let t in r)l+="  "+e.hlpr.space(s+s)+t+" : "+r[t]+" ;\n";return l+=e.hlpr.space(s)+"}\n"},this.addStyle=function(t,r,s,n="."){var l=e.genCls(t,r,0,n);e.styleTag.innerHTML+=l,e.classes++,s&&l&&(e.dd.class_generated+=l.replace(/\r?\n|\r/g,"")),"function"==typeof cb&&cb()},this.config=function(e,t){if("object"==typeof e)for(let t in e)Object.keys(acss).includes(t)&&(acss[t]=e[t]);"function"==typeof t&&t()},this.init=function({data:t,cb:r,cf:s,lscache:n}){if(e.timer={},e.sec=Date.now()/1e3,"undefined"!=typeof cache_init){let e=cache_init;if(console.log(cache_init),!0===e)return}t&&e.config(t),e.keys={prop1:Object.keys(e.prop1),prop2:Object.keys(e.prop2),val:Object.keys(e.val),spProp:Object.keys(e.spProp)},n?e.styleTag=document.createElement("style"):document.body.appendChild(e.styleTag),e.domScanner(document.body),e.respStyle.length&&(e.styleTag.innerHTML+=e.respStyle),"function"==typeof r&&r()},this.domScanner=function(t){let r=t.children,s=t.className.split(" ");e.apply_acss(t,s,s.includes("debug")),r.length&&e.childLooper(r)},this.childLooper=function(t){for(let r of t){let t=(""+(Date.now()/1e3-e.sec)).split(".")[0];Object.keys(e.timer).includes(t)?e.timer[t].push(r.tagName+":"+r.id):e.timer[t]=new Array(r.tagName+":"+r.id);let s="string"==typeof r.getAttribute("class")&&r.getAttribute("class").split(" ");if(!s)continue;e.apply_acss(r,s,s.includes("debug"));let n=r.children;n.length&&e.childLooper(n)}},this.c_def_gen=function(t,r=!1,s=!1){var n={};if(e.keys.spProp.includes(t))return s||e.added.push(t),e.spProp[t];var l=t.split("-");let i=l[0],o=l[1],a=l[2];l[3];return 1==l.length&&e.keys.prop1.includes(i)&&(n[e.prop1[i]]=e.def),2==l.length&&e.keys.prop1.includes(i)&&(e.keys.val.includes(o)?n[e.prop1[i]]=e.val[o]:e.keys.prop2.includes(o)?n[e.prop1[i]+e.prop2[o]]="bdr"==i?e.def_bdr:e.def:e.valParser(l,r)&&(n[e.prop1[i]]=e.valParser(l))),3==l.length&&e.keys.prop1.includes(i)&&e.keys.prop2.includes(o)&&(e.keys.val.includes(a)?n[e.prop1[i]+e.prop2[o]]=e.val[a]:e.valParser(l,r)&&e.keys.prop2.includes(o)&&(n[e.prop1[i]+e.prop2[o]]=e.valParser(l))),n},this.apply_acss=function(t,r=!1,s=!1,n=!1,l=!1,i="#"){if(r=r||"string"==typeof t.getAttribute("class")&&t.getAttribute("class").split(" ")){(s=r.includes("debug"))&&(e.dd={cls:r.join(", "),class_generated:"",parsed_val:new Array,invalid_cls:new Array});var o=new Array,a=new Array;for(let i of r)if(i.startsWith("pc(")&&i.endsWith(")"))e.mq(t,i,e.pc_brkpnt,s),e.added.includes(i)||e.added.push(i);else if(i.startsWith("tb(")&&i.endsWith(")"))e.mq(t,i,e.tab_brkpnt,s),e.added.includes(i)||e.added.push(i);else if(i.startsWith("mb(")&&i.endsWith(")"))e.mq(t,i,e.tab_brkpnt,s,!0),e.added.includes(i)||e.added.push(i);else if(i.startsWith("chd")&&i.endsWith(")")){let r=e.chd_styler(t,i,s,n,l);n&&a.push(r),e.added.includes(i)||e.added.push(i)}else if(i.startsWith("hbr")&&i.endsWith(")")){let r=e.hbr_styler(t,i,s,n,l);n&&a.push(r),e.added.includes(i)||e.added.push(i)}else if(0!=n||!e.added.includes(i)&&"debug"!=i){var c=e.c_def_gen(i,s);n?o.push(c):e.cv(c,s)?(e.added.includes(i)||e.added.push(i),e.addStyle(i,c,s)):s&&e.dd.invalid_cls.push(i)}if(n&&l)return o.length>0&&a.push({tid:n,s_defs:e.hlpr.obj_merger(o),s:i}),a;if(s){let r=t.id.length>1?t.id:t.tagName;console.log("(debug)"+e.hlpr.jsonBeautify(e.dd,r))}}},this.chd_styler=function(t,r,s=!1,n=!1,l=!1){let i=e.hlpr.get_chd_idntfyr(t);if(!i.tid)return console.error(" chd_styler error :",t.tagName,"has no id or unique class for children");let o=i.s,a=r.indexOf("("),c=n||i.tid,d=e.hlpr.chd_clsname_gen(r,c),p=r.substring(a+1,r.length-1),f=e.hlpr.cls_spliter(p);var h={};s&&log(r);for(let r of f){if(r.startsWith("chd")&&r.endsWith(")")){s&&console.log(" startsWith(chd) : ",r),e.chd_styler(t,r,s,d);continue}if(r.startsWith("hbr")&&r.endsWith(")")){e.hbr_styler(t,r,s,d);continue}let n=e.c_def_gen(r,s,!0);for(let e in n)h[e]=n[e]}if(s&&(e.dd[d]=h),n&&l)return{tid:d,s_defs:h,s:o};e.addStyle(d,h,s,o)},this.hbr_styler=function(t,r,s=!1,n=!1,l=!1){let i=e.hlpr.get_chd_idntfyr(t);if(!i.tid)return console.error(" chd_styler error :",t.tagName,"has no id or unique class for children");let o=i.s,a=r.indexOf("("),c=n||i.tid;c+=":hover";let d=r.substring(a+1,r.length-1),p=e.hlpr.cls_spliter(d);var f={};for(let r of p){if(r.startsWith("chd")&&r.endsWith(")")){e.chd_styler(t,r,s,c);continue}let n=e.c_def_gen(r);for(let e in n)f[e]=n[e]}if(s&&console.log("(hbr_c_gen) "+e.hlpr.jsonBeautify(f,c)),n&&l)return{tid:c,s_defs:f,s:o};e.addStyle(c,f,s,o)},this.mq=function(t,r,s,n,l=!1){let i=e.hlpr.get_chd_idntfyr(t);if(!i.tid)return console.error(" chd_styler error :",t.tagName,"has no id or unique class for children");i.s;let o=r.substring(3,r.length-1),a=e.hlpr.cls_spliter(o);var c=new Array;let d=i.tid;c=e.apply_acss(t,a,n,d,!0,i.s),n&&console.log("(mq) cls_arr : "+JSON.stringify(c));let p=e.respStyleGen(c,s,n,l);e.respStyle+=p,n&&(console.log("(mq) "+typeof a+" "+e.hlpr.jsonBeautify(a,"cls")),e.dd.mq=a.join(),e.dd.mq_gen_cls=p.replace(/\n/g,""))},this.valParser=function(t,r){var s=!1,n=t[0],l=t[1],i=t[2],o=(t[3],t[t.length-1]),a=o[o.length-1];return o.startsWith("_")?s=(a="p")?o.replace("_","-")+"x":o.substring(1,o.length):"bg"===n||"clr"==n?s="lg"==l?`linear-gradient(${o})`:"rgba"==l?`rgba(${o})`:o.startsWith("#")?o:"#"+o:o.endsWith("pg")?s=o.replace("pg","%"):"bdr"==n?s="C"==l||"C"==i?"#"+o:o.includes("_")?o.replace("_","x solid #"):e.keys.prop2.includes(l)&&i==o?`${o}x solid`:o+"x solid":"transf"==n?s=e.hlpr.transf_val_parser(o,r):"p"==a?s=o+"x":o.endsWith("vh")||o.endsWith("rem")||"zi,ff,fw,trns,left,right,btm,top,w,h,mh,mw".split(",").includes(n)?s=o.replace("d","."):"p,m,gtc,gtr,rc,bs,opct".split(",").includes(n)&&(s=(o=o.replace("hex","#")).split("_").join(" ")),r&&e.dd.parsed_val.push(t+" -> "+s),s}}function loadCache(e){let t=this;this.file=window.location.href.split("/"),this.loc="/"+this.file[this.file.length-1],this.styleTag=document.createElement("style"),this.init=function(){localStorage.getItem(t.loc)?(log("css cache found in localStorage !"),document.body.insertBefore(t.styleTag,document.body.children[0]),t.styleTag.innerHTML=localStorage.getItem(t.loc),t.lscache=!0):t.lscache=!1,setTimeout((()=>{e.styleTag=t.styleTag,e.init({data:!1,lscache:t.lscache,cb:function(){let r=!!localStorage.getItem(t.loc)&&localStorage.getItem(t.loc).replace(/\s/g,"").replace(/\n/g,""),s=e.styleTag.innerHTML;r!=s.replace(/\s/g,"").replace(/\n/g,"")&&(log("css cache is outdated / invalid\nso recompiling css -> localStorage ;D"),document.body.parentNode.insertBefore(e.styleTag,document.body)),localStorage.setItem(t.loc,s),timeTaken()}})}),0)}}const acssobj=new acss,lc=new loadCache(acssobj);function timeTaken(){let e=(Date.now()/1e3-acssobj.sec).toFixed(3);console.log("acss compiled in ",e,"secs")}onload(lc.init);})();

(async function () {
	window.log = (...a) => console.log(...a);
	window.elog = (...a) => console.error(...a);
	const wait = (n) => new Promise((res) => setTimeout(res, n));

	window.pressed = function (tag, bs = false) {
		tag.style.transition = "0.2s";
		tag.style.transform = "translateY(3px)";
		if (bs) tag.style.boxShadow = "0px 1px 1px #666";
		setTimeout(() => {
			tag.style.transform = "translateY(0px)";
			if (bs) tag.style.boxShadow = "0px 4px 1px #666";
		}, 300);
	};

	window.post = async function (url) {
		let data = document.querySelector("#data-in").value;
		if (!data) return;
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		let req = await fetch(url, {
				method: "POST",
				headers: myHeaders,
				body: JSON.stringify({ data: data }),
			}),
			res = (await req.json()) || {};
		disp(res);
	};

	window.read = async function () {
		let res = await fetch("fs/read"),
			data = (await res.json()) || {};
		disp(data);
	};

	window.disp = function ({ text = false }) {
		if (!text) return;
		let out = document.getElementById("data-out");
		tw.w(out, text);
	};

	window.tw = {
		// tw means typeWriter
		live: false,
		w: async (tag, txt) => {
			if (!(tag && txt)) return;
			if (tw.live) await tw.kill();
			tw.live = tw.live || true;
			tag.textContent = "";
			for (let i = 0; i < txt.length; i++) {
				if (tw.stop) break;
				tag.textContent += txt[i];
				await wait(0);
			}
			tw.live = false;
		},
		kill: () =>
			new Promise(async (res) => {
				tw.stop = true;
				while (true) {
					if (!tw.live) break;
					await wait(10);
				}
				tw.stop = false;
				return res();
			}),
	};

	const newTag = (name) => document.createElement(name);
})();


(async function () {
	window.downloadFile = function (file) {
		return new Promise((res) => {
			const link = document.createElement("a");
			link.style.display = "none";
			link.href = URL.createObjectURL(file);
			if (file.name) link.download = file.name;
			document.body.appendChild(link);
			link.click();
			setTimeout(() => {
				URL.revokeObjectURL(link.href);
				link.parentNode.removeChild(link);
				res("Download Started !");
			}, 0);
		});
	};

	window.tsp = function () {
		const sp = document.querySelector("#sidePanel");
		if (!window.spOn) {
			sp.style.width = "200px";
			window.spOn = true;
		} else {
			sp.style.width = "0px";
			window.spOn = false;
		}
		return false;
	};

	window.thmbgr = function (cb = false) {
		let hmbgr = document.querySelector("#hmbgr");
		let [hr1, hr2, hr3] = hmbgr.children;

		if (!window.hmbgrOn) {
			hr1.style.transform = "translateY(10.5px) rotate(-45deg)";
			hr2.style.transform = "rotate(45deg)";
			hr3.style.transform = "translateY(-10.5px) rotate(-45deg)";
			window.hmbgrOn = true;
		} else {
			hr1.style.transform = "translateY(0px) rotate(0deg)";
			hr2.style.transform = "rotate(0deg)";
			hr3.style.transform = "translateY(0px) rotate(0deg)";
			window.hmbgrOn = false;
		}

		if (cb) return cb();
	};

	window._getH = (tag) =>
		window.getComputedStyle(tag).getPropertyValue("height");

	window._toggleHeight = function (id, height, toggle) {
		const me = this;
		this.id = id;
		this.tag = (i) => document.querySelector(i);
		this.tag(id).style.transition = "0.2s";
		this.h = height || _getH(this.tag(id));
		this.t = () => {
			me.tag(me.id).style.height =
				me.tag(me.id).style.height == "0px" ? me.h : "0px";
		};
		if (toggle) this.t();
	};

	window.qs = (q) => document.querySelector(q);
	window.qsa = (q) => document.querySelectorAll(q);
	window.hide = (tag) => (tag.style.display = "none");

	window.onLoad = async (func) => {
		while (!["complete", "interactive"].includes(document.readyState))
			await new Promise((res) => setTimeout(res, 100));
		return typeof func === "function" ? func() : func;
	};
})();


(async function () {
	window._qsa = (q) => document.querySelectorAll(q);
	window._qs = (q) => document.querySelector(q);

	window._fileManager = function (pwd = "") {
		//this.history = []
		this.bn = location.href.split("/")[location.href.split("/").length - 1];
		const me = this;
		this.pwd = pwd;
		this.ce = (name, ih) => {
			let tag = document.createElement(name);
			tag.innerHTML = ih;
			return tag;
		};

		this.setPwd = (pwd) => {
			var pwd = pwd.split("");
			pwd.shift();
			pwd = pwd.join("").split("/");
			let _pwd = document.querySelector("#pwd");
			let fdir = pwd.shift();
			fdir = fdir.length > 0 ? fdir : "/";
			_pwd.innerHTML = "<span>" + fdir + "</span>";
			for (let d of pwd)
				_pwd.innerHTML +=
					'<div class="rightArrow"></div><span> ' + d + " </span>";
		};
		this.open = async (dir) => {
			let ls =
				(await (
					await fetch("/fm", {
						method: "POST",
						headers: new Headers({ "Content-Type": "application/json" }),
						body: JSON.stringify({ opr: "ls", path: dir }),
					})
				).text()) || false;
			try {
				ls = JSON.parse(ls);
			} catch (e) {
				return log(ls);
			}
			if (ls.error) return log(ls.error);
			me.pwd = ls.pwd;
			if (ls) me.render(ls);
		};

		this.wait = (n) => new Promise((res) => setTimeout(res, n));

		this.render = (ls) => {
			var barsP = document.querySelector(".fad"),
				bars = barsP.children,
				n = bars.length;
			while (n--) barsP.removeChild(bars[n]);
			let pwd = me.pwd.split("/");
			pwd.pop();
			let upDir = pwd.pop();
			//log( upDir )
			barsP.appendChild(me.newgb(upDir));
			ls.dirs.forEach((dir) => barsP.appendChild(me.newDir(dir)));
			ls.files.forEach((file) => barsP.appendChild(me.newFile(file)));
			me.configLinks(me.pwd);
		};

		this.newDir = (name) => {
			let div = document.createElement("div");
			div.className = "dir ovrflw-hdn pos-rel hbr(chd-div(right-0p))";
			div.innerHTML =
				"<img data-src='/icons/folder.png' /> <span> " +
				name +
				'</span> <div style="user-select: none"> Open </div> ';
			return div;
		};

		this.newFile = (name) => {
			let section = document.createElement("section");
			section.innerHTML =
				"<img data-src='/icons/file.png' /> <span> " + name + "</span>";
			return section;
		};

		this.newgb = (name) => {
			//log(name)
			let div = document.createElement("div");
			div.className = "gb ovrflw-hdn pos-rel hbr(chd-div(right-0p))";
			div.style.display =
				name.length < 1 || name == "emulated" ? "none" : "flex";
			div.innerHTML =
				"<img data-src='/icons/back.png' /> <span class=\"upDir\"> " +
				name +
				' </span><div class="bb"  style="user-select:none" onclick="_fm.open(_fm.pwd.split(\'/\').slice(0, -1).join(\'/\'))"> Back </div> ';
			return div;
		};

		this.configLinks = (pwd) => {
			let dirs = _qsa(".dir");
			dirs.forEach((dir) =>
				dir.children[2].addEventListener("click", () => {
					me.open(me.pwd + "/" + dir.children[1].textContent.trim());
				})
			);
			_qs(".upDir").innerHTML = me.pwd.split("/")[me.pwd.split("/").length - 2];
			_qs(".bb").addEventListener("click", () => {
				let p = me.pwd.split("/");
				p.pop();
				me.open(p.join("/"));
			});
			me.setPwd(pwd);
			//history.pushState("", "Title", "/fm" + me.pwd)
			//me.history.push(me.pwd);
			_imgC();
		};
	};

	async function _fmConfig() {
		window._fm = new _fileManager(pwd);
		_fm.open(pwd);
	}

	if (document.title === "File Manager") _fmConfig();
})();


(async function () {
	window.getVQ = () => {
		ytdl_error();
		document.querySelector("#panel").style.opacity = "0";
		qs(".loader").style.display = "block";
		let url = document.querySelector("#url").value.trim() || "";
		if (url.length < 1) return;
		console.log("Fetching /ytdl/getd with %s", url);
		fetch("/ytdl/getd", {
			method: "POST",
			body: JSON.stringify({ url: url }),
			headers: new Headers({ "Content-Type": "application/json" }),
		})
			.then((res) => res.json())
			.then((data) => renderD(data));
	};

	function renderD(data) {
		qs(".loader").style.display = "none";
		if (data.error) return ytdl_error(data.error);
		document.querySelector("#vt").src = data.thumbnail;
		document.querySelector("#vn").innerHTML = `${
			data.title
		} <div class="t-c fw-600"> ( ${getTime(data.dur)} ) </div>`;
		let vqp = document.querySelector("#vPanel"),
			aqp = document.querySelector("#aPanel");
		vqp.innerHTML = "";
		aqp.innerHTML = "";
		for (let q in data.vqs) {
			let qBar = qNode.cloneNode(true);
			qBar.children[0].textContent = q;
			qBar.children[1].textContent = calcSize(data.vqs[q]);
			qBar.children[2].children[0].href = `/ytdl/download?url=${document
				.querySelector("#url")
				.value.trim()}&q=${q}&v=1`;
			vqp.appendChild(qBar);
		}
		for (let q in data.aqs) {
			let qBar = qNode.cloneNode(true);
			qBar.children[0].textContent = q;
			qBar.children[1].textContent = calcSize(data.aqs[q]);
			qBar.children[2].children[0].href = `/ytdl/download?url=${document
				.querySelector("#url")
				.value.trim()}&q=${q}&a=1`;
			aqp.appendChild(qBar);
		}
		document.querySelector("#panel").style.opacity = "1";
	}

	var qNode;

	onLoad(function () {
		if (document.querySelector(".quality"))
			qNode = document.querySelector(".quality").cloneNode(true);
	});

	function calcSize(size) {
		let inmb = (size / (1024 * 1024)).toFixed(2) + " MB";
		return inmb;
	}

	function getTime(secs) {
		let min = parseInt(secs / 60),
			sec = min > 0 ? secs % 60 : secs;
		return min > 0 ? `${min}m ${sec}secs` : `${sec} secs`;
	}

	function ytdl_error(msg = false) {
		let errTag = qs("#ytdl_err");
		if (!msg) return (errTag.style.display = "none");
		errTag.textContent = msg;
		errTag.style.display = "block";
	}

	window.toggle_avTab = function (tag) {
		for (let c of tag.parentNode.children) c.style.border = "none";
		tag.style.borderBottom = "2px solid";
		if (tag.textContent.trim() == "Audio") {
			qs("#vPanel").style.display = "none";
			qs("#aPanel").style.display = "block";
		}
		if (tag.textContent.trim() == "Video") {
			qs("#aPanel").style.display = "none";
			qs("#vPanel").style.display = "block";
		}
	};
})();


(async function () {
	const styles = {
			pg: "display: inline-block; height: 30px; width: 300px; box-sizing: border-box; border: 1px solid; border-radius: 5px; overflow: hidden; font-family: calibri",
			bgTxt:
				"position: relative ;text-align: center; box-sizing: border-box; border-radius: 0px;height: 28px;background: rgba(0,0,0,0.2); width: 298px; padding: 7px; font-size: 14px; color : #162;",
			bar: "position: relative ;text-align: center; box-sizing: border-box;border-radius: 0px;height: 28px; background: #2a5; top: -28px; width: 0px; overflow: hidden; transition : 2s linear;",
			txt: "display: block; width: 298px; font-size: 14px; height: 28px; color: #fff; padding: 7px; box-sizing: border-box;",
			glare:
				"height: 28px; position: relative ; width: 80px; background: linear-gradient(90deg, rgba(250,250,250,0), rgba(250,250,250,0.5), rgba(250,250,250,0.8)); animation: glare 2s linear 0s infinite normal ; top: -28px; border-radius: 0px 3px 3px 0px;",
		},
		kf = `
@keyframes glare {
    from {left: -80px;}
    to {left: 101%;}
}
`;

	window.progressBar = function (pTag) {
		const me = this;
		let ac = (a, ...c) => c.forEach((b) => a.appendChild(b)),
			d = (s) => {
				let tag = document.createElement("div");
				tag.style = s;
				return tag;
			},
			s = (h) => {
				let tag = document.createElement("style");
				tag.innerHTML = h;
				return tag;
			};
		for (let t in styles) me[t] = d(styles[t]);

		this.init = (pTag) => ac(pTag, me.pg, s(kf));

		this.config = (pgBody) => {
			ac(me.bar, me.txt);
			ac(me.bar, me.glare);
			ac(me.pg, me.bgTxt);
			ac(me.pg, me.bar);
			me.text = "";
			me.width = "1%";
		};
		this.config();

		this.update = (data) => {
			me.text = data.text || me.text;
			me.width = data.width || me.width;

			me.bgTxt.textContent = me.text;
			me.txt.textContent = me.text;
			me.bar.style.width = me.width;
		};

		this.glareS = (flag) => (me.glare.style.opacity = flag ? "1" : "0");
	};
})();


(async function () {
	if (document.title != "Image Downloader") return console.log("not imgD");
	const pb = new progressBar();
	const dblk = (...tags) =>
		tags.forEach((tag) => (tag.style.display = "block"));

	const getsc = (s, dd) => {
		let sc = {
			// status Codes
			1: "Job Started",
			2: "Fetching html",
			3: "Downloading imgs " + "(" + dd + ")",
			4: "Zipping Files",
		};
		return sc[s];
	};

	const imgD = (url = false) => {
		url = url || document.querySelector("#website_url").value;
		if (!url) return;
		dbtn();
		dblk(qs("#pbc"), pb.glare);
		fetch("/imgD", {
			method: "POST",
			headers: new Headers({ "Content-Type": "application/json" }),
			body: JSON.stringify({ url: url }),
		})
			.then((res) => res.json())
			.then((data) => logger(data, url));
	};

	function logger(data, url) {
		let { status, done, dlnk = false, downloading: dd } = data,
			w = done
				? "100%"
				: status == 3 && dd != "0/0"
				? eval(dd) * 100 + "%"
				: (status / 5) * 100 + "%",
			t = done ? "Ready To Download !" : getsc(status, dd);
		pb.update({ text: t, width: w });
		done ? (dbtn(dlnk), hide(pb.glare)) : setTimeout(() => imgD(url), 1000);
	}

	function dbtn(url) {
		let dbtnc = qs("#dbtnc");
		url ? dblk(dbtnc) : hide(dbtnc);
		qs("#dbtn").href = url;
	}

	async function onload(cb, ...args) {
		while (document.readyState != "complete")
			await new Promise((res) => setTimeout(res, 500));
		if (args.length) cb(...args);
		cb();
	}

	// log("Adding form handler !")
	onload(() => {
		pb.init(document.querySelector("#pbc"));
		let form = document.querySelector("#siteURL_form");
		// console.log("configuring the form submit event ...");
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			imgD();
		});
	});
})();


(async function () {
let icons = {
	"cart" : (sc = "#333",f ="#fff") => `<svg style="stroke: ${sc};" class="svg-icon" viewBox="0 0 20 20"><path fill="${f}" d="M17.671,13.945l0.003,0.002l1.708-7.687l-0.008-0.002c0.008-0.033,0.021-0.065,0.021-0.102c0-0.236-0.191-0.428-0.427-0.428H5.276L4.67,3.472L4.665,3.473c-0.053-0.175-0.21-0.306-0.403-0.306H1.032c-0.236,0-0.427,0.191-0.427,0.427c0,0.236,0.191,0.428,0.427,0.428h2.902l2.667,9.945l0,0c0.037,0.119,0.125,0.217,0.239,0.268c-0.16,0.26-0.257,0.562-0.257,0.891c0,0.943,0.765,1.707,1.708,1.707S10,16.068,10,15.125c0-0.312-0.09-0.602-0.237-0.855h4.744c-0.146,0.254-0.237,0.543-0.237,0.855c0,0.943,0.766,1.707,1.708,1.707c0.944,0,1.709-0.764,1.709-1.707c0-0.328-0.097-0.631-0.257-0.891C17.55,14.182,17.639,14.074,17.671,13.945 M15.934,6.583h2.502l-0.38,1.709h-2.312L15.934,6.583zM5.505,6.583h2.832l0.189,1.709H5.963L5.505,6.583z M6.65,10.854L6.192,9.146h2.429l0.19,1.708H6.65z M6.879,11.707h2.027l0.189,1.709H7.338L6.879,11.707z M8.292,15.979c-0.472,0-0.854-0.383-0.854-0.854c0-0.473,0.382-0.855,0.854-0.855s0.854,0.383,0.854,0.855C9.146,15.596,8.763,15.979,8.292,15.979 M11.708,13.416H9.955l-0.189-1.709h1.943V13.416z M11.708,10.854H9.67L9.48,9.146h2.228V10.854z M11.708,8.292H9.386l-0.19-1.709h2.512V8.292z M14.315,13.416h-1.753v-1.709h1.942L14.315,13.416zM14.6,10.854h-2.037V9.146h2.227L14.6,10.854z M14.884,8.292h-2.321V6.583h2.512L14.884,8.292z M15.978,15.979c-0.471,0-0.854-0.383-0.854-0.854c0-0.473,0.383-0.855,0.854-0.855c0.473,0,0.854,0.383,0.854,0.855C16.832,15.596,16.45,15.979,15.978,15.979 M16.917,13.416h-1.743l0.189-1.709h1.934L16.917,13.416z M15.458,10.854l0.19-1.708h2.218l-0.38,1.708H15.458z"></path></svg>`,
	"mail" : (sc = "#333",f ="#fff") => `<svg  style="stroke: ${sc};" class="svg-icon" viewBox="0 0 20 20"><path fill ="${f}" d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>`,
	"grid" :(sc = "#333",f ="#fff") =>  `<svg  style="stroke: ${sc};" class="svg-icon" viewBox="0 0 20 20"><path fill="${f}${f}" d="M7.228,11.464H1.996c-0.723,0-1.308,0.587-1.308,1.309v5.232c0,0.722,0.585,1.308,1.308,1.308h5.232c0.723,0,1.308-0.586,1.308-1.308v-5.232C8.536,12.051,7.95,11.464,7.228,11.464z M7.228,17.351c0,0.361-0.293,0.654-0.654,0.654H2.649c-0.361,0-0.654-0.293-0.654-0.654v-3.924c0-0.361,0.292-0.654,0.654-0.654h3.924c0.361,0,0.654,0.293,0.654,0.654V17.351z M17.692,11.464H12.46c-0.723,0-1.308,0.587-1.308,1.309v5.232c0,0.722,0.585,1.308,1.308,1.308h5.232c0.722,0,1.308-0.586,1.308-1.308v-5.232C19,12.051,18.414,11.464,17.692,11.464z M17.692,17.351c0,0.361-0.293,0.654-0.654,0.654h-3.924c-0.361,0-0.654-0.293-0.654-0.654v-3.924c0-0.361,0.293-0.654,0.654-0.654h3.924c0.361,0,0.654,0.293,0.654,0.654V17.351z M7.228,1H1.996C1.273,1,0.688,1.585,0.688,2.308V7.54c0,0.723,0.585,1.308,1.308,1.308h5.232c0.723,0,1.308-0.585,1.308-1.308V2.308C8.536,1.585,7.95,1,7.228,1z M7.228,6.886c0,0.361-0.293,0.654-0.654,0.654H2.649c-0.361,0-0.654-0.292-0.654-0.654V2.962c0-0.361,0.292-0.654,0.654-0.654h3.924c0.361,0,0.654,0.292,0.654,0.654V6.886z M17.692,1H12.46c-0.723,0-1.308,0.585-1.308,1.308V7.54c0,0.723,0.585,1.308,1.308,1.308h5.232C18.414,8.848,19,8.263,19,7.54V2.308C19,1.585,18.414,1,17.692,1z M17.692,6.886c0,0.361-0.293,0.654-0.654,0.654h-3.924c-0.361,0-0.654-0.292-0.654-0.654V2.962c0-0.361,0.293-0.654,0.654-0.654h3.924c0.361,0,0.654,0.292,0.654,0.654V6.886z"></path></svg>`,
	"list" : (sc = "#333",f ="#fff") => `<svg  style="stroke: ${sc};" class="svg-icon" viewBox="0 0 20 20"><path fill="${f}" d="M2.25,12.584c-0.713,0-1.292,0.578-1.292,1.291s0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291S2.963,12.584,2.25,12.584z M2.25,14.307c-0.238,0-0.43-0.193-0.43-0.432s0.192-0.432,0.43-0.432c0.238,0,0.431,0.193,0.431,0.432S2.488,14.307,2.25,14.307z M5.694,6.555H18.61c0.237,0,0.431-0.191,0.431-0.43s-0.193-0.431-0.431-0.431H5.694c-0.238,0-0.43,0.192-0.43,0.431S5.457,6.555,5.694,6.555z M2.25,8.708c-0.713,0-1.292,0.578-1.292,1.291c0,0.715,0.579,1.292,1.292,1.292c0.713,0,1.292-0.577,1.292-1.292C3.542,9.287,2.963,8.708,2.25,8.708z M2.25,10.43c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.43,0.43-0.43c0.238,0,0.431,0.192,0.431,0.43C2.681,10.238,2.488,10.43,2.25,10.43z M18.61,9.57H5.694c-0.238,0-0.43,0.192-0.43,0.43c0,0.238,0.192,0.431,0.43,0.431H18.61c0.237,0,0.431-0.192,0.431-0.431C19.041,9.762,18.848,9.57,18.61,9.57z M18.61,13.443H5.694c-0.238,0-0.43,0.193-0.43,0.432s0.192,0.432,0.43,0.432H18.61c0.237,0,0.431-0.193,0.431-0.432S18.848,13.443,18.61,13.443z M2.25,4.833c-0.713,0-1.292,0.578-1.292,1.292c0,0.713,0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291C3.542,5.412,2.963,4.833,2.25,4.833z M2.25,6.555c-0.238,0-0.43-0.191-0.43-0.43s0.192-0.431,0.43-0.431c0.238,0,0.431,0.192,0.431,0.431S2.488,6.555,2.25,6.555z"></path></svg>`
};

function setIcons() {
	for(let icon of document.querySelectorAll("div")) {
		let iconN = icon.getAttribute("icon") || false;
		let sc = icon.getAttribute("icon-sc");
		let f = icon.getAttribute("icon-fill");
		if ( iconN ) icon.innerHTML = icons[iconN](sc, f);
	}
}

setIcons()
window.setIcons = setIcons
})();





(async function () {
	if (document.title != "NoteBook") return;

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
	let bookWidth = screen.width * 0.32 - 15;
	document.body.innerHTML += `<STYLE>.book { width : ${bookWidth}px; }</STYLE>`;
	window.refreshBookshelf = async function () {
		let books = JSON.parse(localStorage.getItem("books") || "[]");
		let bs = qs(".bookshelf");
		bs.innerHTML = "";
		books.forEach((book) => (bs.innerHTML += createBook(book)));
		setIcons();
		for (let b of bs.children) {
			await new Promise((res) => setTimeout(res, 100));
			b.style.opacity = "1";
			b.style.top = "0";
		}
	};

	refreshBookshelf();

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
		let name = $("#bn").value,
			bg = qs("#bbg").value,
			color = qs("#bc").value,
			icon = "";
		$$(".iconList > div").forEach((i) => {
			if (i.style.background == "rgb(119, 119, 119)")
				icon = i.getAttribute("icon");
		});
		if (!(name && color && icon && bg)) return log({ name, color, icon, bg });
		books.push({ name, color, icon, bg });
		localStorage.setItem("books", JSON.stringify(books));
		hideAllDB();
		refreshBookshelf();
	};

	function createBook({ name, color, icon, bg }) {
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


(async function () {
	
const views = ["index", "fm","ytdl", "imgD", "nb"]

async function getV (view, f = 0) {
	let vd = localStorage.getItem(view+".hbs");
	if ( ! f && vd) return JSON.parse(vd);
	let req = await fetch("/getView", {
			method : "POST",
			headers : new Headers({"Content-Type" : "application/json"}),
			body : JSON.stringify({view})
		}),
		data = await req.json() || {};
	localStorage.setItem(view+".hbs", JSON.stringify(data))
	return data;
}

if ( __appV == 0 || __appV != parseInt(localStorage.getItem("viewV") || "0"))
	for(let v of views) await getV(v, 1);
localStorage.setItem("viewV", __appV);

async function setView ( view , ps = 1) {
	let v = await getV(view);
	let { body , title , mainHeading } = v;
	qs("#body").innerHTML = body;
	document.title = title;
	qs("#mainH").textContent = mainHeading;
	if ( isDev ) log("setting View")
	await loadF.init({ex : "setView", logging : 1, appV : __appV, ignore : ["js/cacheV.js"], uc : 1})
	ca()
	if (ps) history.pushState({view}, "", view)
}

function ca () {
	if ( isDev ) log("Configuring anchors")
	for(let a of qsa("a")) {
		let view = a.getAttribute("view") || false 
		if ( ! view ) continue;
		a.addEventListener("click", async function (e){
			e.preventDefault();
			await setView ( view );
			if ( view == "index") thmbgr(tsp)
		});
	}
}

history.pushState({ view : location.href.split("/").at(-1).split("?")[0].split(".")[0] } , "", "")

window.onpopstate = async function (e) {
	await setView(e.state.view, 0)
}

ca();

})();
