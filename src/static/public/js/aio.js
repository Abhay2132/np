!async function(){window._imgC=async function(){for(;!["complete","interactive"].includes(document.readyState);)await new Promise(e=>setTimeout(e,10));document.querySelectorAll("img").forEach(async e=>{let t=e.getAttribute("data-src");var n,o,i;t&&(n=t.split("/")[t.split("/").length-1],e.src=(o=n,i=t,await new Promise(async t=>{var e=localStorage.getItem(o)||!1;if(e)return t(e);e||t(i),fetch("/img",{body:JSON.stringify({url:i}),headers:new Headers({"Content-Type":"application/json"}),method:"POST"}).then(e=>e.text()).then(e=>{t(e="data:image/jpeg;base64,"+e),localStorage.setItem(o,e)})})))})},_imgC()}(),!async function(){window.log=(...e)=>console.log(...e),window.elog=(...e)=>console.error(...e),window.pressed=function(e,t=!1){e.style.transition="0.2s",e.style.transform="translateY(3px)",t&&(e.style.boxShadow="0px 1px 1px #666"),setTimeout(()=>{e.style.transform="translateY(0px)",t&&(e.style.boxShadow="0px 4px 1px #666")},300)}}(),!async function(){window.$=e=>document.querySelector(e),window.$$=e=>document.querySelectorAll(e),window.hide=e=>e.style.display="none",window.wait=(t=0)=>new Promise(e=>setTimeout(e,t)),window.downloadFile=function(n){return new Promise(e=>{const t=document.createElement("a");t.style.display="none",t.href=URL.createObjectURL(n),n.name&&(t.download=n.name),document.body.appendChild(t),t.click(),setTimeout(()=>{URL.revokeObjectURL(t.href),t.parentNode.removeChild(t),e("Download Started !")},0)})},window.sp={off:function(){const e=$("#sidePanel");return e.style.transform="translateX(-250px)",e.style.opacity="0",window.sp},on:function(){const e=$("#sidePanel");return e.style.transform="translateX(0px)",e.style.opacity="1",window.sp},t:function(e){return"1"==$("#sidePanel").style.opacity?window.sp.off():window.sp.on(),"function"==typeof e&&e(),window.sp}},window.hmbgr={on:function(){let[e,t,n]=$("#hmbgr").children;return e.style.transform="translateY(10.5px) rotate(-45deg)",t.style.transform="rotate(45deg)",n.style.transform="translateY(-10.5px) rotate(-45deg)",window.hmbgr},off:function(){let[e,t,n]=$("#hmbgr").children;return e.style.transform="translateY(0px) rotate(0deg)",t.style.transform="rotate(0deg)",n.style.transform="translateY(0px) rotate(0deg)",window.hmbgr},t:function(e=!1){return"translateY(10.5px) rotate(-45deg)"==$("#hmbgr").children[0].style.transform?window.hmbgr.off():window.hmbgr.on(),e&&e(),window.hmbgr}},window._getH=e=>window.getComputedStyle(e).getPropertyValue("height"),window._toggleHeight=function(e,t,n){const o=this;this.id=e,this.tag=e=>document.querySelector(e),this.tag(e).style.transition="0.2s",this.h=t||_getH(this.tag(e)),this.t=()=>{o.tag(o.id).style.height="0px"==o.tag(o.id).style.height?o.h:"0px"},n&&this.t()},window.onLoad=async e=>{for(;!["complete","interactive"].includes(document.readyState);)await new Promise(e=>setTimeout(e,100));return"function"==typeof e?e():e},$("#mainNav").style.background="transparent",$("#mainNav").style.color="#333"}(),!async function(){"File Manager"!=document.title?delete window._fm:(_fileManager=function(c=""){this.bn=location.href.split("/")[location.href.split("/").length-1];const d=this;this.pwd=c,this.ce=(e,t)=>{let n=document.createElement(e);return n.innerHTML=t,n},this.rendering=!1,this.forceStop=!1,this.stopRender=t=>new Promise(async e=>{for(d.forceStop=!0;d.rendering;)await wait(10);d.forceStop=!1,e("function"==typeof t&&t())}),this.setPwd=(e=d.pwd)=>{e=e.slice(1).split("/");let t=$("#pwd"),n=e.shift();n=0<n.length?n:"/",t.innerHTML="<span>"+n+"</span>";for(var o of e)t.innerHTML+='<div class="rightArrow"></div><span> '+o+" </span>";t.scrollTo(t.scrollWidth,0)},this.open=async e=>{let t=await(await fetch("/fm",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({opr:"ls",path:e})})).text()||!1;try{t=JSON.parse(t)}catch(e){return log(t)}if(t.error)return log(t.error);d.pwd=t.pwd,t&&d.stopRender(()=>d.render(t))},this.wait=t=>new Promise(e=>setTimeout(e,t)),this.render=async e=>{if(!this.rendering){this.rendering=!0,d.setPwd();for(var t=document.querySelector(".files-container"),n=t.children,o=n.length;o--;)t.removeChild(n[o]);var i,r,a=c.split("/").at(-2);t.appendChild(d.newgb(a));for(i of e.dirs){if(d.forceStop)break;var l=d.newDir(i);t.appendChild(l),_imgC(),await wait(20),d.slideUp(l)}for(r of e.files){if(d.forceStop)break;var s=d.newFile(r);t.appendChild(s),_imgC(),await wait(20),d.slideUp(s)}$(".upDir").innerHTML=d.pwd.split("/")[d.pwd.split("/").length-2],this.rendering=!1}},this.slideUp=e=>{e.style.opacity=1,e.style.transform="translateY(0px) scale(1)"},this.newDir=e=>{let t=document.createElement("div");return t.className="folder",t.innerHTML="<img data-src='/icons/folder.png' /> <span class='name'> "+e+'</span> <div class="open-btn" onclick = " _fm.open(_fm.pwd + \'/'+e+"'.trim())\"> Open </div> ",t},this.newFile=e=>{let t=document.createElement("div");return t.className="file",t.innerHTML="<img data-src='/icons/file.png' /> <span class='name'> "+e+"</span>",t},this.newgb=e=>{let t=document.createElement("div");return t.className="gb ovrflw-hdn pos-rel hbr(chd-div(right-0p))",t.style.display=e.length<1||"emulated"==e?"none":"flex",t.innerHTML="<img data-src='/icons/back.png' /> <span class='name upDir'> "+e+" </span><div class=\"back-btn\"  onclick=\"_fm.open(_fm.pwd.split('/').slice(0, -1).join('/'))\"> Back </div> ",t},this.configLinks=e=>{$(".upDir").innerHTML=d.pwd.split("/")[d.pwd.split("/").length-2],d.setPwd(e)}},async function(){window._fm=new _fileManager(pwd),_fm.open(pwd)}())}(),!async function(){var a;function l(e){return(e/1048576).toFixed(2)+" MB"}function s(e=!1){let t=$("#ytdl_err");if(!e)return t.style.display="none";t.textContent=e,t.style.display="block"}"YouTube Video Downloader"!=document.title?(delete window.toggle_avTab,delete window.getVQ):($("input#url").value=localStorage.getItem("lastYtdlVideo")||"",window.getVQ=()=>{s(),document.querySelector("#panel").style.opacity="0",$(".loader").style.display="block";var e=document.querySelector("#url").value.trim()||"";e.length<1||(localStorage.setItem("lastYtdlVideo",e),fetch("/ytdl/getd",{method:"POST",body:JSON.stringify({url:e}),headers:new Headers({"Content-Type":"application/json"})}).then(e=>e.json()).then(e=>{{var o=e,i,r;if($(".loader").style.display="none",o.error)return s(o.error);document.querySelector("#vif").src=o.iframeUrl,document.querySelector("#vif").style.background='url("'+o.thumbnail+'")',$("#vif").style.backgroundSize="contain",document.querySelector("#vn").innerHTML=`${o.title} <div class="t-c fw-600"> ( ${function(e){var t=parseInt(e/60),e=0<t?e%60:e;return 0<t?t+`m ${e}secs`:e+" secs"}(o.dur)} ) </div>`;let t=document.querySelector("#vPanel"),n=document.querySelector("#aPanel");for(i in t.innerHTML="",n.innerHTML="",o.vqs){let e=a.cloneNode(!0);e.children[0].textContent=i,e.children[1].textContent=l(o.vqs[i].size);i=o.vqs[i]["height"];e.children[2].children[0].href=`/ytdl/download?url=${document.querySelector("#url").value.trim()}&q=${i}&v=1`,t.appendChild(e)}for(r in o.aqs){let e=a.cloneNode(!0);e.children[0].textContent=r,e.children[1].textContent=l(o.aqs[r]),e.children[2].children[0].href=`/ytdl/download?url=${document.querySelector("#url").value.trim()}&q=${r}&a=1`,n.appendChild(e)}document.querySelector("#panel").style.opacity="1"}}))},onLoad(function(){document.querySelector(".quality")&&(a=document.querySelector(".quality").cloneNode(!0))}),window.toggle_avTab=function(e){for(var t of e.parentNode.children)t.style.border="none";e.style.borderBottom="2px solid","Audio"==e.textContent.trim()&&($("#vPanel").style.display="none",$("#aPanel").style.display="block"),"Video"==e.textContent.trim()&&($("#aPanel").style.display="none",$("#vPanel").style.display="block")})}(),!async function(){const i={pg:"display: inline-block; height: 30px; width: 300px; box-sizing: border-box; border: 1px solid; border-radius: 5px; overflow: hidden; font-family: calibri",bgTxt:"position: relative ;text-align: center; box-sizing: border-box; border-radius: 0px;height: 28px;background: rgba(0,0,0,0.2); width: 298px; padding: 7px; font-size: 14px; color : #162;",bar:"position: relative ;text-align: center; box-sizing: border-box;border-radius: 0px;height: 28px; background: #2a5; top: -28px; width: 0px; overflow: hidden; transition : 2s linear;",txt:"display: block; width: 298px; font-size: 14px; height: 28px; color: #fff; padding: 7px; box-sizing: border-box;",glare:"height: 28px; position: relative ; width: 80px; background: linear-gradient(90deg, rgba(250,250,250,0), rgba(250,250,250,0.5), rgba(250,250,250,0.8)); animation: glare 2s linear 0s infinite normal ; top: -28px; border-radius: 0px 3px 3px 0px;"};window.progressBar=function(e){const t=this;let n=(t,...e)=>e.forEach(e=>t.appendChild(e));for(var o in i)t[o]=(e=>{let t=document.createElement("div");return t.style=e,t})(i[o]);this.init=e=>n(e,t.pg,(e=>{let t=document.createElement("style");return t.innerHTML=e,t})(`
@keyframes glare {
    from {left: -80px;}
    to {left: 101%;}
}
`)),this.config=e=>{n(t.bar,t.txt),n(t.bar,t.glare),n(t.pg,t.bgTxt),n(t.pg,t.bar),t.text="",t.width="1%"},this.config(),this.update=e=>{t.text=e.text||t.text,t.width=e.width||t.width,t.bgTxt.textContent=t.text,t.txt.textContent=t.text,t.bar.style.width=t.width},this.glareS=e=>t.glare.style.opacity=e?"1":"0"}}(),!async function(){if("Image Downloader"==document.title){const pb=new progressBar,dblk=(...e)=>e.forEach(e=>e.style.display="block"),getsc=(e,t)=>{return{1:"Job Started",2:"Fetching html",3:"Downloading imgs ("+t+")",4:"Zipping Files"}[e]},imgD=(t=!1)=>{(t=t||document.querySelector("#website_url").value)&&(dbtn(),dblk($("#pbc"),pb.glare),fetch("/imgD",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({url:t})}).then(e=>e.json()).then(e=>logger(e,t)))};function logger(data,url){let{status,done,dlnk=!1,downloading:dd}=data,w=done?"100%":3==status&&"0/0"!=dd?100*eval(dd)+"%":status/5*100+"%",t=done?"Ready To Download !":getsc(status,dd);pb.update({text:t,width:w}),done?(dbtn(dlnk),hide(pb.glare)):setTimeout(()=>imgD(url),1e3)}function dbtn(e){let t=$("#dbtn");e?(dblk(t),t.addEventListener("click",()=>setTimeout(()=>{location.href=e},700))):hide(t)}async function onload(e,...t){for(;"complete"!=document.readyState;)await new Promise(e=>setTimeout(e,500));t.length&&e(...t),e()}onload(()=>{pb.init(document.querySelector("#pbc"));let e=document.querySelector("#siteURL_form");e.addEventListener("submit",e=>{e.preventDefault(),imgD()})})}}(),!async function(){let i={cart:(e="#333",t="#fff")=>`<svg style="stroke: ${e};" class="svg-icon" viewBox="0 0 20 20"><path fill="${t}" d="M17.671,13.945l0.003,0.002l1.708-7.687l-0.008-0.002c0.008-0.033,0.021-0.065,0.021-0.102c0-0.236-0.191-0.428-0.427-0.428H5.276L4.67,3.472L4.665,3.473c-0.053-0.175-0.21-0.306-0.403-0.306H1.032c-0.236,0-0.427,0.191-0.427,0.427c0,0.236,0.191,0.428,0.427,0.428h2.902l2.667,9.945l0,0c0.037,0.119,0.125,0.217,0.239,0.268c-0.16,0.26-0.257,0.562-0.257,0.891c0,0.943,0.765,1.707,1.708,1.707S10,16.068,10,15.125c0-0.312-0.09-0.602-0.237-0.855h4.744c-0.146,0.254-0.237,0.543-0.237,0.855c0,0.943,0.766,1.707,1.708,1.707c0.944,0,1.709-0.764,1.709-1.707c0-0.328-0.097-0.631-0.257-0.891C17.55,14.182,17.639,14.074,17.671,13.945 M15.934,6.583h2.502l-0.38,1.709h-2.312L15.934,6.583zM5.505,6.583h2.832l0.189,1.709H5.963L5.505,6.583z M6.65,10.854L6.192,9.146h2.429l0.19,1.708H6.65z M6.879,11.707h2.027l0.189,1.709H7.338L6.879,11.707z M8.292,15.979c-0.472,0-0.854-0.383-0.854-0.854c0-0.473,0.382-0.855,0.854-0.855s0.854,0.383,0.854,0.855C9.146,15.596,8.763,15.979,8.292,15.979 M11.708,13.416H9.955l-0.189-1.709h1.943V13.416z M11.708,10.854H9.67L9.48,9.146h2.228V10.854z M11.708,8.292H9.386l-0.19-1.709h2.512V8.292z M14.315,13.416h-1.753v-1.709h1.942L14.315,13.416zM14.6,10.854h-2.037V9.146h2.227L14.6,10.854z M14.884,8.292h-2.321V6.583h2.512L14.884,8.292z M15.978,15.979c-0.471,0-0.854-0.383-0.854-0.854c0-0.473,0.383-0.855,0.854-0.855c0.473,0,0.854,0.383,0.854,0.855C16.832,15.596,16.45,15.979,15.978,15.979 M16.917,13.416h-1.743l0.189-1.709h1.934L16.917,13.416z M15.458,10.854l0.19-1.708h2.218l-0.38,1.708H15.458z"></path></svg>`,mail:(e="#333",t="#fff")=>`<svg  style="stroke: ${e};" class="svg-icon" viewBox="0 0 20 20"><path fill ="${t}" d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>`,grid:(e="#333",t="#fff")=>`<svg  style="stroke: ${e};" class="svg-icon" viewBox="0 0 20 20"><path fill="${t}${t}" d="M7.228,11.464H1.996c-0.723,0-1.308,0.587-1.308,1.309v5.232c0,0.722,0.585,1.308,1.308,1.308h5.232c0.723,0,1.308-0.586,1.308-1.308v-5.232C8.536,12.051,7.95,11.464,7.228,11.464z M7.228,17.351c0,0.361-0.293,0.654-0.654,0.654H2.649c-0.361,0-0.654-0.293-0.654-0.654v-3.924c0-0.361,0.292-0.654,0.654-0.654h3.924c0.361,0,0.654,0.293,0.654,0.654V17.351z M17.692,11.464H12.46c-0.723,0-1.308,0.587-1.308,1.309v5.232c0,0.722,0.585,1.308,1.308,1.308h5.232c0.722,0,1.308-0.586,1.308-1.308v-5.232C19,12.051,18.414,11.464,17.692,11.464z M17.692,17.351c0,0.361-0.293,0.654-0.654,0.654h-3.924c-0.361,0-0.654-0.293-0.654-0.654v-3.924c0-0.361,0.293-0.654,0.654-0.654h3.924c0.361,0,0.654,0.293,0.654,0.654V17.351z M7.228,1H1.996C1.273,1,0.688,1.585,0.688,2.308V7.54c0,0.723,0.585,1.308,1.308,1.308h5.232c0.723,0,1.308-0.585,1.308-1.308V2.308C8.536,1.585,7.95,1,7.228,1z M7.228,6.886c0,0.361-0.293,0.654-0.654,0.654H2.649c-0.361,0-0.654-0.292-0.654-0.654V2.962c0-0.361,0.292-0.654,0.654-0.654h3.924c0.361,0,0.654,0.292,0.654,0.654V6.886z M17.692,1H12.46c-0.723,0-1.308,0.585-1.308,1.308V7.54c0,0.723,0.585,1.308,1.308,1.308h5.232C18.414,8.848,19,8.263,19,7.54V2.308C19,1.585,18.414,1,17.692,1z M17.692,6.886c0,0.361-0.293,0.654-0.654,0.654h-3.924c-0.361,0-0.654-0.292-0.654-0.654V2.962c0-0.361,0.293-0.654,0.654-0.654h3.924c0.361,0,0.654,0.292,0.654,0.654V6.886z"></path></svg>`,list:(e="#333",t="#fff")=>`<svg  style="stroke: ${e};" class="svg-icon" viewBox="0 0 20 20"><path fill="${t}" d="M2.25,12.584c-0.713,0-1.292,0.578-1.292,1.291s0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291S2.963,12.584,2.25,12.584z M2.25,14.307c-0.238,0-0.43-0.193-0.43-0.432s0.192-0.432,0.43-0.432c0.238,0,0.431,0.193,0.431,0.432S2.488,14.307,2.25,14.307z M5.694,6.555H18.61c0.237,0,0.431-0.191,0.431-0.43s-0.193-0.431-0.431-0.431H5.694c-0.238,0-0.43,0.192-0.43,0.431S5.457,6.555,5.694,6.555z M2.25,8.708c-0.713,0-1.292,0.578-1.292,1.291c0,0.715,0.579,1.292,1.292,1.292c0.713,0,1.292-0.577,1.292-1.292C3.542,9.287,2.963,8.708,2.25,8.708z M2.25,10.43c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.43,0.43-0.43c0.238,0,0.431,0.192,0.431,0.43C2.681,10.238,2.488,10.43,2.25,10.43z M18.61,9.57H5.694c-0.238,0-0.43,0.192-0.43,0.43c0,0.238,0.192,0.431,0.43,0.431H18.61c0.237,0,0.431-0.192,0.431-0.431C19.041,9.762,18.848,9.57,18.61,9.57z M18.61,13.443H5.694c-0.238,0-0.43,0.193-0.43,0.432s0.192,0.432,0.43,0.432H18.61c0.237,0,0.431-0.193,0.431-0.432S18.848,13.443,18.61,13.443z M2.25,4.833c-0.713,0-1.292,0.578-1.292,1.292c0,0.713,0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291C3.542,5.412,2.963,4.833,2.25,4.833z M2.25,6.555c-0.238,0-0.43-0.191-0.43-0.43s0.192-0.431,0.43-0.431c0.238,0,0.431,0.192,0.431,0.431S2.488,6.555,2.25,6.555z"></path></svg>`};function e(){for(var e of document.querySelectorAll("div")){var t=e.getAttribute("icon")||!1,n=e.getAttribute("icon-sc"),o=e.getAttribute("icon-fill");t&&(e.innerHTML=i[t](n,o))}}e(),window.setIcons=e}(),!async function(){async function a(e,t=0){var n=localStorage.getItem(e+".hbs");if(!t&&n)return JSON.parse(n);let o=await fetch("/getView",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({view:e})}),i=await o.json()||{};return localStorage.setItem(e+".hbs",JSON.stringify(i)),i}if(0==__appV||__appV!=parseInt(localStorage.getItem("viewV")||"0"))for(var e of["index","fm","ytdl","imgD","nb"])await a(e,1);async function o(e,t=1){var n=await a(e);const o=$("#body");var{body:n,title:i,mainHeading:r}=n;o.style.transition=.3.toFixed(1)+"s",o.style.opacity=0,o.style.transform="rotateY(90deg)",await wait(300),o.innerHTML=n,document.title=i,$("#mainH").textContent=r,await wait(10),o.style.opacity=1,o.style.transform="",await loadF.init({ex:"setView",logging:0,appV:__appV,ignore:[],uc:1}),t&&history.pushState({view:e},"",e)}localStorage.setItem("viewV",__appV),window.onpopstate=async function(e){await o(e.state.view,0)};for(let n of $$("a")){let t=n.getAttribute("view")||!1;var i=n.getAttribute("listenerAdded")||!1;t&&!i&&n.addEventListener("click",async function(e){e.preventDefault(),n.setAttribute("listenerAdded",!0),await o(t,1),window.hmbgr.off(),window.sp.off()})}}(),!async function(){if("WhatsUp"==document.title){$("#mainNav").style.background="#008069",$("#mainNav").style.color="#fff";let o=$("#new-chat");function t(){var e="translateY(3px)"==this.style.transform;let t=this.style;e&&(t.fontWeight="300",t.color="#333",t.transform="translateY(0px)",t.boxShadow="0px 4px 1px #555",this.state="off"),e||(t.fontWeight="500",t.color="#008069",t.transform="translateY(3px)",t.boxShadow="0px 1px 1px #555",this.state="on")}o.addEventListener("click",function(){let e=$("#new-chat-dialog"),t=$("#chat-list");var n="none"!=e.style.display&&"none"==t.style.display;n&&(e.style.display="none",e.style.transform="scale(0.5)",t.style.opacity="0",t.style.display="block",o.style.transform="rotate(0deg)",o.style.background="#008069",setTimeout(()=>{t.style.opacity="1",t.style.transform="scale(1)"},0)),n||(e.style.opacity="0",e.style.display="block",t.style.display="none",t.style.transform="scale(0.5)",o.style.transform="rotate(45deg)",o.style.background="#C51F00",setTimeout(()=>{e.style.opacity="1",e.style.transform="scale(1)"},0))}),$$("#nco > div").forEach(e=>e.addEventListener("click",t))}}();