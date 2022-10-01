const scrollOverlay = document.getElementById("scrollOverlay");
const scrollBg = document.getElementById("scrollBg");
var left = 0;
let scale = 0;
const body = document.querySelector("body");
const footers = document.querySelectorAll("footer");
const url_footerHill = ["./img/tree/palm.svg","./img/hill/hill_xl-plain.svg", "./img/hill/lg-textured.svg", "./img/hill/sm-plain.svg"]
const url_footerPyramid = ["./img/tree/desert-palm.svg","./img/pyramid/lg.svg", "./img/pyramid/sm.svg"]
const headers = document.querySelectorAll("header");
const url_platform_cloud = "./img/platform_cloud.svg";

const scrollOverlayUl = document.getElementById("scrollOverlayUl");

const Mario = document.getElementById("Mario");



//console.log();
function zoom(event) {

  if (left > document.body.clientWidth * 4) {
    left = document.body.clientWidth * 4;
  } else if (left < 0) {
    left = 0;
    
  } else {
    left += event.deltaY * 0.5;
    
  }
  document.body.scrollTo(left, 0);
  //console.log(left, event.deltaY, document.body.clientWidth);
  
}

scrollOverlay.onwheel = zoom;
scrollBg.onwheel = zoom;

function createFooterHill(footers,url_footerHill) {


  for (let footerIndex = 0; footerIndex < footers.length; footerIndex++) {
    const random = Math.floor((Math.random() * 3));

    for (let index = 0; index <= random; index++) {

      const img = document.createElement("img");
      const image = url_footerHill[Math.floor((Math.random() * url_footerHill.length))]
      img.src = image;

      img.alt = image;

      footers[footerIndex].appendChild(img);
    }





  }



}
function createHeadersCloud(){
  for (let headersIndex = 0; headersIndex < headers.length; headersIndex++) {
    const random = Math.floor((Math.random() * 3));
    for (let index = 0; index <= random; index++) {
  
      const img = document.createElement("img");
      img.src = url_platform_cloud;
      img.alt = url_platform_cloud;
  
      headers[headersIndex].appendChild(img);
    }
  
    
  }
  
}

createHeadersCloud(headers,url_platform_cloud)
createFooterHill(footers,url_footerHill)
let ScrollState = 0;
setInterval(()=>{
  const scrollPosition = scrollBg.getBoundingClientRect()
  const x = scrollPosition.width + scrollPosition.x -document.body.clientWidth;
  
  //console.log(x);
  if(x <= document.body.clientWidth/2){
    body.style = "--colorBgLight: black; --opacityBgLight: 0.5;";//#5f79fe;
    if(scrollPosition.x*-1>=document.body.clientWidth *4 &&  scrollPosition.x*-1<document.body.clientWidth *5){
      scrollOverlayUl.children[4].classList.add("active")
      scrollOverlay.children[0].innerText = "WORLD END";
    }
  }
  else{
    body.style = "--colorBgLight: #5f79fe;--opacityBgLight: 1;";//
    if(scrollPosition.x*-1>=document.body.clientWidth &&  scrollPosition.x*-1<document.body.clientWidth *2){
      //console.log("Level2");
      scrollOverlayUl.children[1].classList.add("active")
      scrollOverlayUl.children[2].classList.remove("active")
      scrollOverlayUl.children[3].classList.remove("active")
      scrollOverlayUl.children[4].classList.remove("active")
      scrollOverlay.children[0].innerText = "WORLD 2";
    }
    else if(scrollPosition.x*-1>=document.body.clientWidth *2 &&  scrollPosition.x*-1<document.body.clientWidth *3){
      scrollOverlayUl.children[2].classList.add("active")
      scrollOverlayUl.children[3].classList.remove("active")
      scrollOverlayUl.children[4].classList.remove("active")
      scrollOverlay.children[0].innerText = "WORLD 3";
    }
    else if(scrollPosition.x*-1>=document.body.clientWidth *3 &&  scrollPosition.x*-1<document.body.clientWidth *4){
      scrollOverlayUl.children[3].classList.add("active")
      scrollOverlayUl.children[4].classList.remove("active")
      scrollOverlay.children[0].innerText = "WORLD 4";
    }
    else{
      scrollOverlayUl.children[1].classList.remove("active")
      scrollOverlayUl.children[2].classList.remove("active")
      scrollOverlayUl.children[3].classList.remove("active")
      scrollOverlayUl.children[4].classList.remove("active")
      scrollOverlay.children[0].innerText = "WORLD 1";
    }
    
  }
  if(ScrollState > scrollPosition.x){
    console.log("Run Left");
    ScrollState = scrollPosition.x;
    Mario.classList.remove("runRight");
    Mario.classList.add("runLeft");

  }else if(ScrollState < scrollPosition.x){
    console.log("Run Right");
    ScrollState = scrollPosition.x;
    Mario.classList.remove("runLeft");
    Mario.classList.add("runRight");
  }
  
  else{
    console.log("stop");
    Mario.classList.remove("runLeft");
    Mario.classList.remove("runRight");
  }
    
},100)
