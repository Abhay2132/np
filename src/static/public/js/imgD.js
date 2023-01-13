import { $ , dlog } from "./hlpr.js"

const startImgD = async () => {
	const link = $("#website_url")?.value;

	fetch("/imgD",{
		method : "POST",
		body : JSON.stringify({link}),
		headers : {
			"Content-Type" : "application/json"
		}
	})
	.then(r => r.json())
	.then(handleData)
	.catch(console.error)
	reset_imgd_ui();
}

function reset_imgd_ui() {
	$("#imgD-ps").classList.remove("collapse")
	$("#imgD-loading").classList.replace("collapse", "show-loader");
	$("#imgD-info").classList.add("collapse");
}

function handleData (data){
	if(data.error) return dlog(data)
		$("#imgD-loading").classList.replace("show-loader","collapse");
		$("#imgD-info").classList.remove("collapse");
		$("#img-title").textContent = data.title;
		$("#img-num").textContent = data.imgs + " images found !";
		$("#imgD-dl").onclick = () => window.location.assign("/imgD/dl?token="+data.token);
}

export function onStart() {
	if (document.title != "Image Downloader") return;
	$("#siteURL_form").addEventListener("submit", e => {
		e.preventDefault();
		startImgD();
	})
}

onStart();
