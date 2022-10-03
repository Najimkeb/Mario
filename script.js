const scrollOverlay = document.getElementById("scrollOverlay");
const scrollBg = document.getElementById("scrollBg");
var left = 0;
let scale = 0;
const body = document.querySelector("body");
const footers = document.querySelector("footer");
const url_footerHill = [
  "./img/tree/palm.svg",
  "./img/hill/hill_xl-plain.svg",
  "./img/hill/lg-textured.svg",
  "./img/hill/sm-plain.svg",
];
const url_footerPyramid = [
  "./img/tree/desert-palm.svg",
  "./img/pyramid/lg.svg",
  "./img/pyramid/sm.svg",
];
const headers = document.querySelector("header");
const url_platform_cloud = "./img/platform_cloud.svg";



//console.log();
function zoom(event) {
  if (left > document.body.clientWidth * 4) {
    left = document.body.clientWidth * 4;
  } else if (left < 0) {
    left = 0;
  } else {
    left += event.deltaY * 0.8;
  }
  document.body.scrollTo(left, 0);
  //console.log(left, event.deltaY, document.body.clientWidth);
}



function createFooterHill(footers, url_footerHill) {
  const random = Math.floor(Math.random() * 10 + 2);
  for (let index = 0; index <= random; index++) {
    const img = document.createElement("img");
    const image =
      url_footerHill[Math.floor(Math.random() * url_footerHill.length)];
    img.src = image;
    img.alt = image;
    footers.appendChild(img);
  }
}
function createHeadersCloud() {
  const random = Math.floor(Math.random() * 10 + 1) / 1.5;
  for (let index = 0; index <= random; index++) {
    const img = document.createElement("img");
    img.src = url_platform_cloud;
    img.alt = url_platform_cloud;

    headers.appendChild(img);
  }
}

createHeadersCloud(headers, url_platform_cloud);
createFooterHill(footers, url_footerHill);



const scrollOverlayUl = document.getElementById("scrollOverlayUl");

const Mario = document.getElementById("Mario");
const Champignon = document.getElementById("Champignon");
const EndMessage = document.getElementById('EndMessage')
let progress = 0;
let stop = 0;

let ScrollState = 0;



scrollOverlay.onwheel = zoom;
scrollBg.onwheel = zoom;


let scrollPosition = scrollBg.getBoundingClientRect();
let Xn1 = scrollPosition.x * -1;




function FirstWorld() {
  if (
    scrollPosition.x * -1 < document.body.clientWidth &&
    scrollPosition.x * -1 >= 0
  ) {
    scrollOverlayUl.children[1].classList.remove("active");
    scrollOverlayUl.children[2].classList.remove("active");
    scrollOverlayUl.children[3].classList.remove("active");
    scrollOverlayUl.children[4].classList.remove("active");
    scrollOverlay.children[0].innerText = "WORLD 1";
  } else {
    return;
  }
}
function SecondWorld() {
  if (
    scrollPosition.x * -1 >= document.body.clientWidth &&
    scrollPosition.x * -1 < document.body.clientWidth * 2
  ) {
    scrollOverlayUl.children[1].classList.add("active");
    scrollOverlayUl.children[2].classList.remove("active");
    scrollOverlayUl.children[3].classList.remove("active");
    scrollOverlayUl.children[4].classList.remove("active");
    scrollOverlay.children[0].innerText = "WORLD 2";
  } else {
    return;
  }
}

function ThirdWorld() {
  if (
    scrollPosition.x * -1 >= document.body.clientWidth * 2 &&
    scrollPosition.x * -1 < document.body.clientWidth * 3
  ) {
    scrollOverlayUl.children[2].classList.add("active");
    scrollOverlayUl.children[3].classList.remove("active");
    scrollOverlayUl.children[4].classList.remove("active");
    scrollOverlay.children[0].innerText = "WORLD 3";
  } else {
    return;
  }
}
function ForthWorld() {
  if (
    scrollPosition.x * -1 >= document.body.clientWidth * 3 &&
    scrollPosition.x * -1 < document.body.clientWidth * 4
  ) {
    scrollOverlayUl.children[3].classList.add("active");
    scrollOverlayUl.children[4].classList.remove("active");
    scrollOverlay.children[0].innerText = "WORLD 4";
  } else {
    return;
  }
}
let StopEndOfWorld = 0;
function EndOfWorld() {
  if (
    scrollPosition.x * -1 >= document.body.clientWidth * 4 &&
    scrollPosition.x * -1 < document.body.clientWidth * 5
  ) {
    Mario.classList.add("SayHello");
    body.style = "--colorBgLight: black; --opacityBgLight: 0.5;"; //#5f79fe;
    //Message de Fin de jeu
    
    if(StopEndOfWorld >= 20){
        EndMessage.classList.add('active');
        StopEndOfWorld = 20;
    }else{
        EndMessage.classList.remove('active');
        StopEndOfWorld++;
    }
    //
    scrollOverlayUl.children[4].classList.add("active");
    scrollOverlay.children[0].innerText = "WORLD 5";
  } else {
    StopEndOfWorld = 0;
    body.style = "--colorBgLight: #5f79fe;--opacityBgLight: 1;"; //
    Mario.classList.remove("SayHello");
    EndMessage.classList.remove('active');
  }
}







const Update = () => {
  scrollPosition = scrollBg.getBoundingClientRect();

  //console.log(scrollPosition.x, Xn1);
  //Mario Movement
  const X = scrollPosition.x * -1;
  Mario.style.left = (Xn1 + 50) + "px";
  if (Xn1 > X) {
    Mario.classList.add("runRight");
    Mario.style.transform = "scaleX(-1)scale(2)";
    Xn1 += 2
    stop = 0;
  }
  else if (Xn1 < X) {
    Mario.classList.add("runLeft");
    Mario.style.transform = "scaleX(1)scale(2)";
    Xn1 -= 2
    stop = 0;
  }


  else {
    if (stop > 10) {
      Mario.classList.remove("runRight");
      Mario.classList.remove("runLeft");

      Mario.style.transform = "scaleX(1)scale(2)";
    } else {
      stop++;
    }

  }



  //Mario Evolution

  if (scrollPosition.x * -1 >= document.body.clientWidth &&
    scrollPosition.x * -1 < document.body.clientWidth * 2 && Mario.classList.contains("little")) {
    Mario.classList.remove("little");
    Champignon.classList.add("disable");
    Mario.classList.add("normal");
  }
  if (scrollPosition.x * -1 < document.body.clientWidth && Mario.classList.contains("normal")) {
    Mario.classList.remove("normal");
    Champignon.classList.remove("disable");
    Mario.classList.add("little");
  }

  FirstWorld();
  SecondWorld();
  ThirdWorld();
  ForthWorld();
  EndOfWorld();





  //console.log(progress);
  setTimeout(() => {
    Xn1 = scrollPosition.x * -1
    requestAnimationFrame(Update);
  }, 1000 / 100);
};
Update();
