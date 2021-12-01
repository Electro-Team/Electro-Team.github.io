const lite = document.getElementById("lite")
if (localStorage.getItem("litemode")===null){
    localStorage.getItem('litemode', "false");
}
checkStatus()
function checkStatus(){
    if (localStorage.getItem('litemode')==="true"){
        lite.checked = true;
        /*LITE OFF*/
        document.getElementById("head").style.backgroundImage="radial-gradient( circle farthest-corner at 10% 20%, rgba(0, 0, 0, 0.9) 0.1%, rgba(83, 2, 150, 0.6) 99.8%),url('img/bg.jpg')"
        document.body.style.background="rgb(241, 241, 241)"
        document.getElementById("svgos").style.opacity="1"
        document.getElementById("svgos2").style.opacity="1"
        document.getElementById("windows").style.background="rgba(255, 255, 255, 0.98)"
        document.getElementById("windows").style.color="black"
        document.getElementById("android").style.background="rgba(255, 255, 255, 0.98)"
        document.getElementById("android").style.color="black"
        document.getElementById("dns-settings").style.background="linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
        document.getElementById("about").style.color="black"
        document.getElementById("acorbg").style.background="white"
        document.getElementById("tabs").style.background="white"
        document.getElementById("tabs").style.color="black"
        document.getElementById("rdc").style.color="black"
        document.getElementById("footer").style.background="radial-gradient( circle farthest-corner at 10% 20%, rgba(37, 130, 251, 0.98) 0.1%, rgb(81, 0, 128) 99.8% )"
    }else{
        lite.checked = false;
        /*LITE ON*/
        document.getElementById("head").style.backgroundImage="radial-gradient(circle farthest-corner at 10% 20%, rgba(12, 12, 12, 0.8) 0.1%, rgb(44, 0, 58) 99.8%),url('img/bg.jpg')"
        document.body.style.background="#282828"
        document.getElementById("svgos").style.opacity="0.4"
        document.getElementById("svgos2").style.opacity="0.4"
        document.getElementById("windows").style.background="#151515"
        document.getElementById("windows").style.color="white"
        document.getElementById("android").style.background="#151515"
        document.getElementById("android").style.color="white"
        document.getElementById("dns-settings").style.background="linear-gradient(43deg, #1e2454 0%, #520030 46%, #3d2d11 100%)"
        document.getElementById("about").style.color="white"
        document.getElementById("acorbg").style.background="#151515"
        document.getElementById("tabs").style.background="#151515"
        document.getElementById("tabs").style.color="white"
        document.getElementById("rdc").style.color="black"
        document.getElementById("footer").style.background="radial-gradient(circle farthest-corner at 10% 20%, rgba(12, 12, 12, 0.98) 0.1%, rgb(44, 0, 58) 99.8%)"
    }
}






function changeStatus(){
    if (localStorage.getItem('litemode')==="true"){
        localStorage.setItem('litemode', "false");
        /*LITE ON*/
        document.getElementById("head").style.backgroundImage="radial-gradient(circle farthest-corner at 10% 20%, rgba(12, 12, 12, 0.8) 0.1%, rgb(44, 0, 58) 99.8%),url('img/bg.jpg')"
        document.body.style.background="#282828"
        document.getElementById("svgos").style.opacity="0.4"
        document.getElementById("svgos2").style.opacity="0.4"
        document.getElementById("windows").style.background="#151515"
        document.getElementById("windows").style.color="white"
        document.getElementById("android").style.background="#151515"
        document.getElementById("android").style.color="white"
        document.getElementById("dns-settings").style.background="linear-gradient(43deg, #1e2454 0%, #520030 46%, #3d2d11 100%)"
        document.getElementById("about").style.color="white"
        document.getElementById("acorbg").style.background="#151515"
        document.getElementById("tabs").style.background="#151515"
        document.getElementById("tabs").style.color="white"
        document.getElementById("rdc").style.color="black"
        document.getElementById("footer").style.background="radial-gradient(circle farthest-corner at 10% 20%, rgba(12, 12, 12, 0.98) 0.1%, rgb(44, 0, 58) 99.8%)"

    } else{
        localStorage.setItem('litemode', "true");
        /*LITE OFF*/
        document.getElementById("head").style.backgroundImage="radial-gradient( circle farthest-corner at 10% 20%, rgba(0, 0, 0, 0.9) 0.1%, rgba(83, 2, 150, 0.6) 99.8%),url('img/bg.jpg')"
        document.body.style.background="rgb(241, 241, 241)"
        document.getElementById("svgos").style.opacity="1"
        document.getElementById("svgos2").style.opacity="1"
        document.getElementById("windows").style.background="rgba(255, 255, 255, 0.98)"
        document.getElementById("windows").style.color="black"
        document.getElementById("android").style.background="rgba(255, 255, 255, 0.98)"
        document.getElementById("android").style.color="black"
        document.getElementById("dns-settings").style.background="linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
        document.getElementById("about").style.color="black"
        document.getElementById("acorbg").style.background="white"
        document.getElementById("tabs").style.background="white"
        document.getElementById("tabs").style.color="black"
        document.getElementById("rdc").style.color="black"
        document.getElementById("footer").style.background="radial-gradient( circle farthest-corner at 10% 20%, rgba(37, 130, 251, 0.98) 0.1%, rgb(81, 0, 128) 99.8% )"
    }
}