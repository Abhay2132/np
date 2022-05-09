!async function(){window._imgC=async function(){for(;!["complete","interactive"].includes(document.readyState);)await new Promise(e=>setTimeout(e,10));document.querySelectorAll("img").forEach(async e=>{let t=e.getAttribute("data-src");var n,r,o;t&&(n=t.split("/")[t.split("/").length-1],e.src=(r=n,o=t,await new Promise(async t=>{var e=localStorage.getItem(r)||!1;if(e)return t(e);e||t(o),fetch("/img",{body:JSON.stringify({url:o}),headers:new Headers({"Content-Type":"application/json"}),method:"POST"}).then(e=>e.text()).then(e=>{t(e="data:image/jpeg;base64,"+e),localStorage.setItem(r,e)})})))})},_imgC()}();const prop1={p:"padding",m:"margin",rc:"border-radius",d:"display",bdr:"border",t:"text-align",w:"width",h:"height",f:"font-size",bg:"background",clr:"color",out:"outline",gtc:"grid-template-columns",gtr:"grid-template-rows",ff:"font-family",btm:"bottom",top:"top",left:"left",right:"right",ovrflw:"overflow",ovrflwX:"overflow-x",ovrflwY:"overflow-y",pos:"position",vcblt:"visibility",trns:"transition",transf:"transform",fw:"font-weight",lst:"list-style",usr:"user-select",mh:"max-height",mw:"max-width",minw:"min-width",minh:"min-height",txtdc:"text-decoration",opct:"opacity",flxwrp:"flex-wrap",jc:"justify-content",ai:"align-items",ws:"white-space",wwrp:"word-wrap",gg:"grid-gap",bs:"box-shadow",crsr:"cursor",zi:"z-index",wrdbrk:"word-break",flxDir:"flex-direction"},prop2={T:"-top",B:"-bottom",L:"-left",R:"-right",lg:"",rgba:"",C:"-color",S:"-size"},val={xxs:"1px",xs:"3px",s:"5px",l:"15px",xl:"20px",xxl:"25px",xxxl:"30px",no:"none",b:"block",ib:"inline-block",flx:"flex",iflx:"inline-flex",c:"center",lft:"left",r:"right",100:"100%",0:"0%",drk:"#333",grd:"grid",n:"0px",ig:"inline-grid",hdn:"hidden",a:"auto",abs:"absolute",rel:"relative",vcbl:"visible",transp:"transparent",wrp:"wrap",spcb:"space-between",fxd:"fixed",nw:"nowrap",pntr:"pointer",scrl:"scroll",def:"default",brkall:"break-all",flxs:"flex-start",brkw:"break-word"},def="10px",spProp={flxWrp:{"flex-wrap":"wrap"},"f-c-c":{display:"flex","flex-direction":"column","justify-content":"center"},"f-r-c":{display:"flex","flex-direction":"row","justify-content":"center"},fsb:{display:"flex","flex-direction":"row","justify-content":"space-between"},bb:{"box-sizing":"border-box"},bnw:{"background-color":"#0095FF",color:"white"},dnw:{"background-color":"#333",color:"white"},lthm:{"background-color":"#fff",color:"#333","border-color":"#333"},bdr:{border:"1px solid"},"trns-txt":{background:"url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/990140/download.png)   -20px -20px fixed","-webkit-text-fill-color":"transparent","-webkit-background-clip":"text"},flxwrp:{"flex-wrap":"wrap"},dwnArw:{border:"10px solid rgba(0,0,0,0)",display:"inline-block","border-top-color":"#333",position:"relative",top:"0.5rem"},toc:{"transform-origin":"50% 50%"},tof:{"transform-origin":"0% 50%"},st:{transition:"0.3s"},midl:{display:"flex","justify-content":"center","align-items":"center"},btn_off:{border:"1px solid","border-radius":"5px","box-shadow":"0px 4px 0px #555",transform:"translateY(0px)"},btn_on:{border:"1px solid","border-radius":"5px","box-shadow":"0px 2px 0px #555",transform:"translateY(2px)"},not_btn:{border:"0px solid","border-radius":"5px","box-shadow":"0px 0px 0px transparent",transform:"translateY(0px)"},carousel:{"scroll-snap-type":"x mandatory","scroll-behavior":"smooth"},slide:{"scroll-snap-align":"center","flex-shrink":0},vc:{display:"flex","align-items":"center"},blrbg:{"backdrop-filter":"blur(5px)"},err:{background:"#CD0A00",color:"#fff"},alrt:{background:"#E8DC5F",color:"#333"}};var keys={prop1:Object.keys(prop1),prop2:Object.keys(prop2),val:Object.keys(val),spProp:Object.keys(spProp)};function onload(e,...t){setTimeout(function(){if("interactive"==document.readyState||"complete"==document.readyState)return e(...t);onload(e,...t)},0)}function hlpr(){let l=this;this.jsonBeautify=function(e,t,n){n=n||2,t=t||"json","object"==typeof e&&(e=JSON.stringify(e));var r,o="",i=0;t.length&&(o=t+" = ");let s=!1;for(r of e)'"'===r&&(s=!s),"{"===r||"["===r?(i+=n,o+=r+"\n"+l.space(i)):"}"===r||"]"===r?(i-=n,o+="\n"+l.space(i)+r):o+=","!==r||s?r:r+"\n"+l.space(i);return o},this.space=function(e){for(str="";e--;)str+=" ";return str},this.rndmStrGen=function(e){e=e||5;for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",r=n.length,o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*r));return t},this.cls_spliter=function(e,t=","){let n="",r=0,o=new Array;for(var i of e)"("===i?r++:")"===i&&r--,t==i&&0==r?(o.push(n),n=""):n+=i;return o.push(n),o},this.obj_merger=function(e){let t={};for(var n of e)for(var r in n)t[r]=n[r];return t},this.chd_clsname_gen=function(e,t){var n=e.indexOf("("),e=e.substring(0,n);return t+" > "+(3<e.length?e.split("-")[1].split("_").join(","):"*")},this.replaceAll=function(e,t,n=" "){if(!e)return!1;let r="";for(var o of e)r+=o===t?n:o;return r},this.transf_val_parser=function(e,t){var n="";if(e.includes("a"))for(var r of e.split("a"))n+=l.transf_val_parser(r)+" ";else e.startsWith("y")&&e.endsWith("p")?n="translateY("+(e=e.replace("_","-")).substring(1,e.length)+"x)":e.startsWith("x")&&e.endsWith("p")?n="translateX("+(e=e.replace("_","-")).substring(1,e.length)+"x)":e.startsWith("r")?n=(e=e.replace("r","rotate("))+"deg)":e.startsWith("s")&&(n=(e=(e=e.replace("d",".")).replace("s","scale("))+")");return t&&console.log("transf-parser : "+e+" -> "+n),n},this.get_chd_idntfyr=function(e,t){let n=e.id||!1,r=e.className.split(" ")||new Array;if(t&&log("tcls",":",r),n)return{tid:n,s:"#"};for(c of r)if(!("debug"==c||!c||(c.startsWith("mb(")||c.startsWith("chd(")||c.startsWith("pc(")||c.startsWith("tb("))&&c.endsWith(")")||keys.prop1.includes(c.split("-")[0])||keys.spProp.includes(c))){n=c,t&&log("! keys.prop1.includes(c) :",c);break}return t&&console.log("tid : ",n),{tid:n,s:"."}}}const log=(...e)=>console.log(...e);function loadCache(r){let o=this,i=(this.file=window.location.href.split("/"),this.loc="/"+this.file[this.file.length-1],this.styleTag=document.createElement("style"),"cache");this.init=function(n){localStorage.getItem(o.loc)?(document.body.insertBefore(o.styleTag,document.body.children[0]),o.styleTag.innerHTML=localStorage.getItem(o.loc),o.lscache=!0):o.lscache=!1,setTimeout(()=>{r.styleTag=o.styleTag,r.init({data:!1,lscache:o.lscache,cb:function(){let e=!!localStorage.getItem(o.loc)&&localStorage.getItem(o.loc).replace(/\s/g,"").replace(/\n/g,""),t=r.styleTag.innerHTML;e!=t.replace(/\s/g,"").replace(/\n/g,"")&&(i="acss",document.body.parentNode.insertBefore(r.styleTag,document.body)),localStorage.setItem(o.loc,t),n&&timeTaken(i)}})},0)}}window.acss=function(){const f=this;this.config=function(e,t){for(var n in e)f[n]||(f[n]=e[n]);"function"==typeof t&&t()},this.config({hlpr:new hlpr,prop1:prop1,prop2:prop2,val:val,def:def,def_bdr:"1px solid",spProp:spProp,added:new Array,keys:{},pc_brkpnt:"768px",tab_brkpnt:"600px",respStyle:"",classes:0,dd:"",styleTag:document.createElement("style")}),this.respStyleGen=function(e,t,n,r=!1){let o="\n@media only screen and ("+(r?"max":"min")+"-width:"+t+") {";for(var i of e)o+=f.genCls(i.tid,i.s_defs,2,i.s);return o+="}\n",n&&console.log("(respStyleGen) "+o),o},this.cv=function(e,t){if(Object.keys(e).length<1||e==={})return!1;for(var n in e)if(!e[n])return!1;return!0},this.genCls=function(e,t,n=0,r="."){var o,i="\n"+f.hlpr.space(n)+r+e+" {\n";for(o in t)i+="  "+f.hlpr.space(n+n)+o+" : "+t[o]+" ;\n";return i+(f.hlpr.space(n)+"}\n")},this.addStyle=function(e,t,n,r="."){e=f.genCls(e,t,0,r);f.styleTag.innerHTML+=e,f.classes++,n&&e&&(f.dd.class_generated+=e.replace(/\r?\n|\r/g,"")),"function"==typeof cb&&cb()},this.config=function(e,t){if("object"==typeof e)for(var n in e)Object.keys(acss).includes(n)&&(acss[n]=e[n]);"function"==typeof t&&t()},this.init=function({data:e=!1,cb:t=()=>{},st:n=document.body,lscache:r=!1}){if(f.timer={},f.sat=Date.now(),"undefined"!=typeof cache_init){var o=cache_init;if(console.log(cache_init),!0===o)return}e&&f.config(e),f.keys={prop1:Object.keys(f.prop1),prop2:Object.keys(f.prop2),val:Object.keys(f.val),spProp:Object.keys(f.spProp)},r?f.styleTag=document.createElement("style"):document.body.appendChild(f.styleTag),f.domScanner(n),f.respStyle.length&&(f.styleTag.innerHTML+=f.respStyle),"function"==typeof t&&t()},this.domScanner=function(e){let t=e.children,n=e.className.split(" ");f.apply_acss(e,n,n.includes("debug")),t.length&&f.childLooper(t)},this.childLooper=function(e){for(var t of e){var n=(""+(Date.now()/1e3-f.sec)).split(".")[0];Object.keys(f.timer).includes(n)?f.timer[n].push(t.tagName+":"+t.id):f.timer[n]=new Array(t.tagName+":"+t.id);let e="string"==typeof t.getAttribute("class")&&t.getAttribute("class").split(" ");e&&(f.apply_acss(t,e,e.includes("debug")),(n=t.children).length&&f.childLooper(n))}},this.c_def_gen=function(e,t=!1,n=!1){var r={};if(f.keys.spProp.includes(e))return n||f.added.push(e),f.spProp[e];var n=e.split("-"),e=n[0],o=n[1],i=n[2];return n[3],1==n.length&&f.keys.prop1.includes(e)&&(r[f.prop1[e]]=f.def),2==n.length&&f.keys.prop1.includes(e)&&(f.keys.val.includes(o)?r[f.prop1[e]]=f.val[o]:f.keys.prop2.includes(o)?r[f.prop1[e]+f.prop2[o]]="bdr"==e?f.def_bdr:f.def:f.valParser(n,t)&&(r[f.prop1[e]]=f.valParser(n))),3==n.length&&f.keys.prop1.includes(e)&&f.keys.prop2.includes(o)&&(f.keys.val.includes(i)?r[f.prop1[e]+f.prop2[o]]=f.val[i]:f.valParser(n,t)&&f.keys.prop2.includes(o)&&(r[f.prop1[e]+f.prop2[o]]=f.valParser(n))),r},this.apply_acss=function(e,t=!1,n=!1,r=!1,o=!1,i="#"){if(t=t||"string"==typeof e.getAttribute("class")&&e.getAttribute("class").split(" ")){(n=t.includes("debug"))&&(f.dd={cls:t.join(", "),class_generated:"",parsed_val:new Array,invalid_cls:new Array});var s,l,a,c=new Array,d=new Array;for(s of t)s.startsWith("pc(")&&s.endsWith(")")?(f.mq(e,s,f.pc_brkpnt,n),f.added.includes(s)||f.added.push(s)):s.startsWith("tb(")&&s.endsWith(")")?(f.mq(e,s,f.tab_brkpnt,n),f.added.includes(s)||f.added.push(s)):s.startsWith("mb(")&&s.endsWith(")")?(f.mq(e,s,f.tab_brkpnt,n,!0),f.added.includes(s)||f.added.push(s)):s.startsWith("chd")&&s.endsWith(")")?(l=f.chd_styler(e,s,n,r,o),r&&d.push(l),f.added.includes(s)||f.added.push(s)):s.startsWith("hbr")&&s.endsWith(")")?(l=f.hbr_styler(e,s,n,r,o),r&&d.push(l),f.added.includes(s)||f.added.push(s)):0==r&&(f.added.includes(s)||"debug"==s)||(a=f.c_def_gen(s,n),r?c.push(a):f.cv(a,n)?(f.added.includes(s)||f.added.push(s),f.addStyle(s,a,n)):n&&f.dd.invalid_cls.push(s));if(r&&o)return 0<c.length&&d.push({tid:r,s_defs:f.hlpr.obj_merger(c),s:i}),d;n&&(t=1<e.id.length?e.id:e.tagName,console.log("(debug)"+f.hlpr.jsonBeautify(f.dd,t)))}},this.chd_styler=function(e,t,n=!1,r=!1,o=!1){var i=f.hlpr.get_chd_idntfyr(e);if(!i.tid)return console.error(" chd_styler error :",e.tagName,"has no id or unique class for children");var s,l=i.s,a=t.indexOf("("),i=r||i.tid,c=f.hlpr.chd_clsname_gen(t,i),i=t.substring(a+1,t.length-1),a=f.hlpr.cls_spliter(i),d={};n&&log(t);for(s of a)if(s.startsWith("chd")&&s.endsWith(")"))n&&console.log(" startsWith(chd) : ",s),f.chd_styler(e,s,n,c);else if(s.startsWith("hbr")&&s.endsWith(")"))f.hbr_styler(e,s,n,c);else{var p,h=f.c_def_gen(s,n,!0);for(p in h)d[p]=h[p]}if(n&&(f.dd[c]=d),r&&o)return{tid:c,s_defs:d,s:l};f.addStyle(c,d,n,l)},this.hbr_styler=function(e,t,n=!1,r=!1,o=!1){var i=f.hlpr.get_chd_idntfyr(e);if(!i.tid)return console.error(" chd_styler error :",e.tagName,"has no id or unique class for children");var s,l=i.s,a=t.indexOf("("),c=r||i.tid,i=(c+=":hover",t.substring(a+1,t.length-1)),d={};for(s of f.hlpr.cls_spliter(i))if(s.startsWith("chd")&&s.endsWith(")"))f.chd_styler(e,s,n,c);else{var p,h=f.c_def_gen(s);for(p in h)d[p]=h[p]}if(n&&console.log("(hbr_c_gen) "+f.hlpr.jsonBeautify(d,c)),r&&o)return{tid:c,s_defs:d,s:l};f.addStyle(c,d,n,l)},this.mq=function(e,t,n,r,o=!1){var i=f.hlpr.get_chd_idntfyr(e);if(!i.tid)return console.error(" chd_styler error :",e.tagName,"has no id or unique class for children");i.s;let s=t.substring(3,t.length-1),l=f.hlpr.cls_spliter(s);new Array;t=i.tid,e=f.apply_acss(e,l,r,t,!0,i.s);r&&console.log("(mq) cls_arr : "+JSON.stringify(e));let a=f.respStyleGen(e,n,r,o);f.respStyle+=a,r&&(console.log("(mq) "+typeof l+" "+f.hlpr.jsonBeautify(l,"cls")),f.dd.mq=l.join(),f.dd.mq_gen_cls=a.replace(/\n/g,""))},this.valParser=function(e,t){var n=!1,r=e[0],o=e[1],i=e[2],s=(e[3],e[e.length-1]),l=s[s.length-1];return s.startsWith("_")?(l="p",n=s.replace("_","-")+"x"):"bg"===r||"clr"==r?n="lg"==o?`linear-gradient(${s})`:"rgba"==o?`rgba(${s})`:s.startsWith("#")?s:"#"+s:s.endsWith("pg")?n=s.replace("pg","%"):"bdr"==r?n="C"==o||"C"==i?"#"+s:s.includes("_")?s.replace("_","x solid #"):(f.keys.prop2.includes(o),s+"x solid"):"transf"==r?n=f.hlpr.transf_val_parser(s,t):"p"==l?n=s+"x":s.endsWith("vh")||s.endsWith("rem")||"zi,ff,fw,trns,left,right,btm,top,w,h,mh,mw".split(",").includes(r)?n=s.replace("d","."):"p,m,gtc,gtr,rc,bs,opct".split(",").includes(r)&&(n=(s=s.replace("hex","#")).split("_").join(" ")),t&&f.dd.parsed_val.push(e+" -> "+n),n}};let devMode="undefined"!=typeof isDev?isDev:location.href.startsWith("http://localhost");const acssobj=new acss,lc=new loadCache(acssobj);function timeTaken(e){var t=Date.now()-acssobj.sat+"ms";console.log({sorce:e,acssT:t})}onload(()=>lc.init(devMode)),!async function(){window.log=(...e)=>console.log(...e),window.elog=(...e)=>console.error(...e);const r=t=>new Promise(e=>setTimeout(e,t));window.pressed=function(e,t=!1){e.style.transition="0.2s",e.style.transform="translateY(3px)",t&&(e.style.boxShadow="0px 1px 1px #666"),setTimeout(()=>{e.style.transform="translateY(0px)",t&&(e.style.boxShadow="0px 4px 1px #666")},300)},window.post=async function(r){var o=document.querySelector("#data-in").value;if(o){let e=new Headers,t=(e.append("Content-Type","application/json"),await fetch(r,{method:"POST",headers:e,body:JSON.stringify({data:o})})),n=await t.json()||{};disp(n)}},window.read=async function(){let e=await fetch("fs/read"),t=await e.json()||{};disp(t)},window.disp=function({text:e=!1}){var t;e&&(t=document.getElementById("data-out"),tw.w(t,e))},window.tw={live:!1,w:async(t,n)=>{if(t&&n){tw.live&&await tw.kill(),tw.live=tw.live||!0,t.textContent="";for(let e=0;e<n.length&&!tw.stop;e++)t.textContent+=n[e],await r(0);tw.live=!1}},kill:()=>new Promise(async e=>{for(tw.stop=!0;;){if(!tw.live)break;await r(10)}return tw.stop=!1,e()})}}(),!async function(){window.downloadFile=function(n){return new Promise(e=>{const t=document.createElement("a");t.style.display="none",t.href=URL.createObjectURL(n),n.name&&(t.download=n.name),document.body.appendChild(t),t.click(),setTimeout(()=>{URL.revokeObjectURL(t.href),t.parentNode.removeChild(t),e("Download Started !")},0)})},window.tsp=function(){const e=document.querySelector("#sidePanel");return window.spOn?(e.style.width="0px",window.spOn=!1):(e.style.width="200px",window.spOn=!0),!1},window.thmbgr=function(e=!1){let[t,n,r]=document.querySelector("#hmbgr").children;if(window.hmbgrOn?(t.style.transform="translateY(0px) rotate(0deg)",n.style.transform="rotate(0deg)",r.style.transform="translateY(0px) rotate(0deg)",window.hmbgrOn=!1):(t.style.transform="translateY(10.5px) rotate(-45deg)",n.style.transform="rotate(45deg)",r.style.transform="translateY(-10.5px) rotate(-45deg)",window.hmbgrOn=!0),e)return e()},window._getH=e=>window.getComputedStyle(e).getPropertyValue("height"),window._toggleHeight=function(e,t,n){const r=this;this.id=e,this.tag=e=>document.querySelector(e),this.tag(e).style.transition="0.2s",this.h=t||_getH(this.tag(e)),this.t=()=>{r.tag(r.id).style.height="0px"==r.tag(r.id).style.height?r.h:"0px"},n&&this.t()},window.qs=e=>document.querySelector(e),window.qsa=e=>document.querySelectorAll(e),window.hide=e=>e.style.display="none",window.onLoad=async e=>{for(;!["complete","interactive"].includes(document.readyState);)await new Promise(e=>setTimeout(e,100));return"function"==typeof e?e():e}}(),!async function(){window._qsa=e=>document.querySelectorAll(e),window._qs=e=>document.querySelector(e),window._fileManager=function(e=""){this.bn=location.href.split("/")[location.href.split("/").length-1];const s=this;this.pwd=e,this.ce=(e,t)=>{let n=document.createElement(e);return n.innerHTML=t,n},this.setPwd=e=>{var t;(e=e.split("")).shift(),e=e.join("").split("/");let n=document.querySelector("#pwd"),r=e.shift();r=0<r.length?r:"/",n.innerHTML="<span>"+r+"</span>";for(t of e)n.innerHTML+='<div class="rightArrow"></div><span> '+t+" </span>"},this.open=async e=>{let t=await(await fetch("/fm",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({opr:"ls",path:e})})).text()||!1;try{t=JSON.parse(t)}catch(e){return log(t)}if(t.error)return log(t.error);s.pwd=t.pwd,t&&s.render(t)},this.wait=t=>new Promise(e=>setTimeout(e,t)),this.render=e=>{for(var t=document.querySelector(".fad"),n=t.children,r=n.length;r--;)t.removeChild(n[r]);let o=s.pwd.split("/");o.pop();var i=o.pop();t.appendChild(s.newgb(i)),e.dirs.forEach(e=>t.appendChild(s.newDir(e))),e.files.forEach(e=>t.appendChild(s.newFile(e))),s.configLinks(s.pwd)},this.newDir=e=>{let t=document.createElement("div");return t.className="dir ovrflw-hdn pos-rel hbr(chd-div(right-0p))",t.innerHTML="<img data-src='/icons/folder.png' /> <span> "+e+'</span> <div style="user-select: none"> Open </div> ',t},this.newFile=e=>{let t=document.createElement("section");return t.innerHTML="<img data-src='/icons/file.png' /> <span> "+e+"</span>",t},this.newgb=e=>{let t=document.createElement("div");return t.className="gb ovrflw-hdn pos-rel hbr(chd-div(right-0p))",t.style.display=e.length<1||"emulated"==e?"none":"flex",t.innerHTML="<img data-src='/icons/back.png' /> <span class=\"upDir\"> "+e+' </span><div class="bb"  style="user-select:none" onclick="_fm.open(_fm.pwd.split(\'/\').slice(0, -1).join(\'/\'))"> Back </div> ',t},this.configLinks=e=>{let t=_qsa(".dir");t.forEach(e=>e.children[2].addEventListener("click",()=>{s.open(s.pwd+"/"+e.children[1].textContent.trim())})),_qs(".upDir").innerHTML=s.pwd.split("/")[s.pwd.split("/").length-2],_qs(".bb").addEventListener("click",()=>{let e=s.pwd.split("/");e.pop(),s.open(e.join("/"))}),s.setPwd(e),_imgC()}},"File Manager"===document.title&&async function(){window._fm=new _fileManager(pwd),_fm.open(pwd)}()}(),!async function(){var s;function l(e){return(e/1048576).toFixed(2)+" MB"}function a(e=!1){let t=qs("#ytdl_err");if(!e)return t.style.display="none";t.textContent=e,t.style.display="block"}"YouTube Video Downloader"==document.title&&(qs("input#url").value=localStorage.getItem("lastYtdlVideo")||"",window.getVQ=()=>{a(),document.querySelector("#panel").style.opacity="0",qs(".loader").style.display="block";var e=document.querySelector("#url").value.trim()||"";e.length<1||(localStorage.setItem("lastYtdlVideo",e),fetch("/ytdl/getd",{method:"POST",body:JSON.stringify({url:e}),headers:new Headers({"Content-Type":"application/json"})}).then(e=>e.json()).then(e=>{{var r=e,o,i;if(qs(".loader").style.display="none",r.error)return a(r.error);document.querySelector("#vif").src=r.iframeUrl,document.querySelector("#vif").style.background='url("'+r.thumbnail+'")',qs("#vif").style.backgroundSize="contain",document.querySelector("#vn").innerHTML=`${r.title} <div class="t-c fw-600"> ( ${function(e){var t=parseInt(e/60),e=0<t?e%60:e;return 0<t?t+`m ${e}secs`:e+" secs"}(r.dur)} ) </div>`;let t=document.querySelector("#vPanel"),n=document.querySelector("#aPanel");for(o in t.innerHTML="",n.innerHTML="",r.vqs){let e=s.cloneNode(!0);e.children[0].textContent=o,e.children[1].textContent=l(r.vqs[o].size);o=r.vqs[o]["height"];e.children[2].children[0].href=`/ytdl/download?url=${document.querySelector("#url").value.trim()}&q=${o}&v=1`,t.appendChild(e)}for(i in r.aqs){let e=s.cloneNode(!0);e.children[0].textContent=i,e.children[1].textContent=l(r.aqs[i]),e.children[2].children[0].href=`/ytdl/download?url=${document.querySelector("#url").value.trim()}&q=${i}&a=1`,n.appendChild(e)}return void(document.querySelector("#panel").style.opacity="1")}}))},onLoad(function(){document.querySelector(".quality")&&(s=document.querySelector(".quality").cloneNode(!0))}),window.toggle_avTab=function(e){for(var t of e.parentNode.children)t.style.border="none";e.style.borderBottom="2px solid","Audio"==e.textContent.trim()&&(qs("#vPanel").style.display="none",qs("#aPanel").style.display="block"),"Video"==e.textContent.trim()&&(qs("#aPanel").style.display="none",qs("#vPanel").style.display="block")})}(),!async function(){const o={pg:"display: inline-block; height: 30px; width: 300px; box-sizing: border-box; border: 1px solid; border-radius: 5px; overflow: hidden; font-family: calibri",bgTxt:"position: relative ;text-align: center; box-sizing: border-box; border-radius: 0px;height: 28px;background: rgba(0,0,0,0.2); width: 298px; padding: 7px; font-size: 14px; color : #162;",bar:"position: relative ;text-align: center; box-sizing: border-box;border-radius: 0px;height: 28px; background: #2a5; top: -28px; width: 0px; overflow: hidden; transition : 2s linear;",txt:"display: block; width: 298px; font-size: 14px; height: 28px; color: #fff; padding: 7px; box-sizing: border-box;",glare:"height: 28px; position: relative ; width: 80px; background: linear-gradient(90deg, rgba(250,250,250,0), rgba(250,250,250,0.5), rgba(250,250,250,0.8)); animation: glare 2s linear 0s infinite normal ; top: -28px; border-radius: 0px 3px 3px 0px;"};window.progressBar=function(e){const t=this;let n=(t,...e)=>e.forEach(e=>t.appendChild(e));for(var r in o)t[r]=(e=>{let t=document.createElement("div");return t.style=e,t})(o[r]);this.init=e=>n(e,t.pg,(e=>{let t=document.createElement("style");return t.innerHTML=e,t})(`
@keyframes glare {
    from {left: -80px;}
    to {left: 101%;}
}
`)),this.config=e=>{n(t.bar,t.txt),n(t.bar,t.glare),n(t.pg,t.bgTxt),n(t.pg,t.bar),t.text="",t.width="1%"},this.config(),this.update=e=>{t.text=e.text||t.text,t.width=e.width||t.width,t.bgTxt.textContent=t.text,t.txt.textContent=t.text,t.bar.style.width=t.width},this.glareS=e=>t.glare.style.opacity=e?"1":"0"}}(),!async function(){if("Image Downloader"==document.title){const pb=new progressBar,dblk=(...e)=>e.forEach(e=>e.style.display="block"),getsc=(e,t)=>{return{1:"Job Started",2:"Fetching html",3:"Downloading imgs ("+t+")",4:"Zipping Files"}[e]},imgD=(t=!1)=>{(t=t||document.querySelector("#website_url").value)&&(dbtn(),dblk(qs("#pbc"),pb.glare),fetch("/imgD",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({url:t})}).then(e=>e.json()).then(e=>logger(e,t)))};function logger(data,url){let{status,done,dlnk=!1,downloading:dd}=data,w=done?"100%":3==status&&"0/0"!=dd?100*eval(dd)+"%":status/5*100+"%",t=done?"Ready To Download !":getsc(status,dd);pb.update({text:t,width:w}),done?(dbtn(dlnk),hide(pb.glare)):setTimeout(()=>imgD(url),1e3)}function dbtn(e){var t=qs("#dbtnc");(e?dblk:hide)(t),qs("#dbtn").href=e}async function onload(e,...t){for(;"complete"!=document.readyState;)await new Promise(e=>setTimeout(e,500));t.length&&e(...t),e()}onload(()=>{pb.init(document.querySelector("#pbc"));let e=document.querySelector("#siteURL_form");e.addEventListener("submit",e=>{e.preventDefault(),imgD()})})}}(),!async function(){let o={cart:(e="#333",t="#fff")=>`<svg style="stroke: ${e};" class="svg-icon" viewBox="0 0 20 20"><path fill="${t}" d="M17.671,13.945l0.003,0.002l1.708-7.687l-0.008-0.002c0.008-0.033,0.021-0.065,0.021-0.102c0-0.236-0.191-0.428-0.427-0.428H5.276L4.67,3.472L4.665,3.473c-0.053-0.175-0.21-0.306-0.403-0.306H1.032c-0.236,0-0.427,0.191-0.427,0.427c0,0.236,0.191,0.428,0.427,0.428h2.902l2.667,9.945l0,0c0.037,0.119,0.125,0.217,0.239,0.268c-0.16,0.26-0.257,0.562-0.257,0.891c0,0.943,0.765,1.707,1.708,1.707S10,16.068,10,15.125c0-0.312-0.09-0.602-0.237-0.855h4.744c-0.146,0.254-0.237,0.543-0.237,0.855c0,0.943,0.766,1.707,1.708,1.707c0.944,0,1.709-0.764,1.709-1.707c0-0.328-0.097-0.631-0.257-0.891C17.55,14.182,17.639,14.074,17.671,13.945 M15.934,6.583h2.502l-0.38,1.709h-2.312L15.934,6.583zM5.505,6.583h2.832l0.189,1.709H5.963L5.505,6.583z M6.65,10.854L6.192,9.146h2.429l0.19,1.708H6.65z M6.879,11.707h2.027l0.189,1.709H7.338L6.879,11.707z M8.292,15.979c-0.472,0-0.854-0.383-0.854-0.854c0-0.473,0.382-0.855,0.854-0.855s0.854,0.383,0.854,0.855C9.146,15.596,8.763,15.979,8.292,15.979 M11.708,13.416H9.955l-0.189-1.709h1.943V13.416z M11.708,10.854H9.67L9.48,9.146h2.228V10.854z M11.708,8.292H9.386l-0.19-1.709h2.512V8.292z M14.315,13.416h-1.753v-1.709h1.942L14.315,13.416zM14.6,10.854h-2.037V9.146h2.227L14.6,10.854z M14.884,8.292h-2.321V6.583h2.512L14.884,8.292z M15.978,15.979c-0.471,0-0.854-0.383-0.854-0.854c0-0.473,0.383-0.855,0.854-0.855c0.473,0,0.854,0.383,0.854,0.855C16.832,15.596,16.45,15.979,15.978,15.979 M16.917,13.416h-1.743l0.189-1.709h1.934L16.917,13.416z M15.458,10.854l0.19-1.708h2.218l-0.38,1.708H15.458z"></path></svg>`,mail:(e="#333",t="#fff")=>`<svg  style="stroke: ${e};" class="svg-icon" viewBox="0 0 20 20"><path fill ="${t}" d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>`,grid:(e="#333",t="#fff")=>`<svg  style="stroke: ${e};" class="svg-icon" viewBox="0 0 20 20"><path fill="${t}${t}" d="M7.228,11.464H1.996c-0.723,0-1.308,0.587-1.308,1.309v5.232c0,0.722,0.585,1.308,1.308,1.308h5.232c0.723,0,1.308-0.586,1.308-1.308v-5.232C8.536,12.051,7.95,11.464,7.228,11.464z M7.228,17.351c0,0.361-0.293,0.654-0.654,0.654H2.649c-0.361,0-0.654-0.293-0.654-0.654v-3.924c0-0.361,0.292-0.654,0.654-0.654h3.924c0.361,0,0.654,0.293,0.654,0.654V17.351z M17.692,11.464H12.46c-0.723,0-1.308,0.587-1.308,1.309v5.232c0,0.722,0.585,1.308,1.308,1.308h5.232c0.722,0,1.308-0.586,1.308-1.308v-5.232C19,12.051,18.414,11.464,17.692,11.464z M17.692,17.351c0,0.361-0.293,0.654-0.654,0.654h-3.924c-0.361,0-0.654-0.293-0.654-0.654v-3.924c0-0.361,0.293-0.654,0.654-0.654h3.924c0.361,0,0.654,0.293,0.654,0.654V17.351z M7.228,1H1.996C1.273,1,0.688,1.585,0.688,2.308V7.54c0,0.723,0.585,1.308,1.308,1.308h5.232c0.723,0,1.308-0.585,1.308-1.308V2.308C8.536,1.585,7.95,1,7.228,1z M7.228,6.886c0,0.361-0.293,0.654-0.654,0.654H2.649c-0.361,0-0.654-0.292-0.654-0.654V2.962c0-0.361,0.292-0.654,0.654-0.654h3.924c0.361,0,0.654,0.292,0.654,0.654V6.886z M17.692,1H12.46c-0.723,0-1.308,0.585-1.308,1.308V7.54c0,0.723,0.585,1.308,1.308,1.308h5.232C18.414,8.848,19,8.263,19,7.54V2.308C19,1.585,18.414,1,17.692,1z M17.692,6.886c0,0.361-0.293,0.654-0.654,0.654h-3.924c-0.361,0-0.654-0.292-0.654-0.654V2.962c0-0.361,0.293-0.654,0.654-0.654h3.924c0.361,0,0.654,0.292,0.654,0.654V6.886z"></path></svg>`,list:(e="#333",t="#fff")=>`<svg  style="stroke: ${e};" class="svg-icon" viewBox="0 0 20 20"><path fill="${t}" d="M2.25,12.584c-0.713,0-1.292,0.578-1.292,1.291s0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291S2.963,12.584,2.25,12.584z M2.25,14.307c-0.238,0-0.43-0.193-0.43-0.432s0.192-0.432,0.43-0.432c0.238,0,0.431,0.193,0.431,0.432S2.488,14.307,2.25,14.307z M5.694,6.555H18.61c0.237,0,0.431-0.191,0.431-0.43s-0.193-0.431-0.431-0.431H5.694c-0.238,0-0.43,0.192-0.43,0.431S5.457,6.555,5.694,6.555z M2.25,8.708c-0.713,0-1.292,0.578-1.292,1.291c0,0.715,0.579,1.292,1.292,1.292c0.713,0,1.292-0.577,1.292-1.292C3.542,9.287,2.963,8.708,2.25,8.708z M2.25,10.43c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.43,0.43-0.43c0.238,0,0.431,0.192,0.431,0.43C2.681,10.238,2.488,10.43,2.25,10.43z M18.61,9.57H5.694c-0.238,0-0.43,0.192-0.43,0.43c0,0.238,0.192,0.431,0.43,0.431H18.61c0.237,0,0.431-0.192,0.431-0.431C19.041,9.762,18.848,9.57,18.61,9.57z M18.61,13.443H5.694c-0.238,0-0.43,0.193-0.43,0.432s0.192,0.432,0.43,0.432H18.61c0.237,0,0.431-0.193,0.431-0.432S18.848,13.443,18.61,13.443z M2.25,4.833c-0.713,0-1.292,0.578-1.292,1.292c0,0.713,0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291C3.542,5.412,2.963,4.833,2.25,4.833z M2.25,6.555c-0.238,0-0.43-0.191-0.43-0.43s0.192-0.431,0.43-0.431c0.238,0,0.431,0.192,0.431,0.431S2.488,6.555,2.25,6.555z"></path></svg>`};function e(){for(var e of document.querySelectorAll("div")){var t=e.getAttribute("icon")||!1,n=e.getAttribute("icon-sc"),r=e.getAttribute("icon-fill");t&&(e.innerHTML=o[t](n,r))}}e(),window.setIcons=e}(),!async function(){if("NoteBook"==document.title){let s=qs(".book").cloneNode(!0);window.setView=function(e){let t=qs("#viewType");"list"==e?(qs("#bookshelf").className="list",t.children[0].style.background="#bbb",t.children[1].style.background="transparent"):"grid"==e&&(qs("#bookshelf").className="grid",t.children[0].style.background="transparent",t.children[1].style.background="#bbb"),localStorage.setItem("bookViewType",e)},setView(localStorage.getItem("bookViewType")||"grid");var e,i=e=>qsa(e);Object.defineProperty({},"b",{get:function(){return qs(".DBC")}}),window.manageNbf=function(){0==qs("#bookshelf").children.length?qs(".nbf").style.display="block":qs(".nbf").style.display="none"},window.refreshBookshelf=async function(){let e=JSON.parse(localStorage.getItem("books")||"[]"),t=qs("#bookshelf");t.innerHTML="",e.forEach(e=>t.appendChild(r(e))),setIcons();for(var n of t.children)await new Promise(e=>setTimeout(e,100)),n.style.opacity="1",n.style.top="0";manageNbf()},refreshBookshelf(),window.appendBook=async function(t=!1){if(t){let e=r(t);qs("#bookshelf").appendChild(e),await new Promise(e=>setTimeout(e,100)),setIcons(),e.style.opacity="1",e.style.top="0",manageNbf()}},window.hideAllDB=async(t=0)=>{await new Promise(e=>setTimeout(e,t));for(var e of i(".DB"))e.style.opacity="0",e.style.top="100px";for(let e of i(".DBC"))setTimeout(()=>e.style.display="none",190);i(".iconList > div").forEach(e=>e.style.background="transparent")};for(e of i(".DBC"))e.children[0].addEventListener("click",hideAllDB);function r({name:e,color:t,icon:n,bg:r}){let o=s.cloneNode(!0),i=(o.style.background=r,o.style.color=t,o.children[0].children[0]);return i.setAttribute("icon",n),i.setAttribute("icon-sc",t),o.children[1].children[0].textContent=e,o}function l(e){var t;for(t of JSON.parse(localStorage.getItem("books")||"[]"))if(t.name==e)return!1;return!0}qs("#addNew").addEventListener("click",()=>{let e=qs("#bkfrm");qs("#cnb").style.display="flex",setTimeout(()=>(e.style.opacity="1",e.style.position="relative",e.style.top="0px"),50)}),i(".iconList > div").forEach(e=>e.addEventListener("click",()=>{i(".iconList > div").forEach(e=>e.style.background="transparent"),e.style.background="#777"})),window.createNB=function(){let e=JSON.parse(localStorage.getItem("books")||"[]"),t=qs("#bn").value,n=qs("#bbg").value,r=qs("#bc").value,o="";if(i(".iconList > div").forEach(e=>{"rgb(119, 119, 119)"==e.style.background&&(o=e.getAttribute("icon"))}),!((t=!!l(t)&&t)&&r&&o&&n))return log({name:t,color:r,icon:o,bg:n});e.push({name:t,color:r,icon:o,bg:n}),localStorage.setItem("books",JSON.stringify(e)),hideAllDB(),appendBook({name:t,color:r,icon:o,bg:n}),qs("#bn").value=""},qs("#bn").addEventListener("keyup",function(){var e=l(this.value);this.style.background=e?"#fff":"#C50E00",this.style.color=e?"#333":"#fff",e?(qs(".bnErrPre").style.display="none",qs("#bnErr").style.display="none"):(qs(".bnErrPre").style.display="block",qs("#bnErr").style.display="block")})}}(),!async function(){async function i(e,t=0){var n=localStorage.getItem(e+".hbs");if(!t&&n)return JSON.parse(n);let r=await fetch("/getView",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({view:e})}),o=await r.json()||{};return localStorage.setItem(e+".hbs",JSON.stringify(o)),o}if(0==__appV||__appV!=parseInt(localStorage.getItem("viewV")||"0"))for(var e of["index","fm","ytdl","imgD","nb"])await i(e,1);async function n(e,t=1){var{body:n,title:r,mainHeading:o}=await i(e);qs("#body").innerHTML=n,document.title=r,qs("#mainH").textContent=o,isDev&&log("setting View"),await loadF.init({ex:"setView",logging:0,appV:__appV,ignore:[],uc:1}),t&&history.pushState({view:e},"",e)}localStorage.setItem("viewV",__appV),window.onpopstate=async function(e){await n(e.state.view,0)};var r,t="root";isDev&&log("Configuring anchors from",t);for(r of qsa("a")){let t=r.getAttribute("view")||!1;t&&r.addEventListener("click",async function(e){e.preventDefault(),await n(t,1),"index"==t&&thmbgr(tsp)})}}();