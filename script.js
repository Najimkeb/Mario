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
const audio = new Audio("./sound/smw_piece.wav");
let AudioCanPlay = false;
const audioSource = document.querySelector("audio");
function playGames() {
  audioSource.play();
  setTimeout(() => {
    document.body.scrollTo(150, 0);
    AudioCanPlay = true;
  }, 500);
}

function createFooterHill(footers, url_footerHill, alt) {
  const Coins = document.createElement("div");
  const random = Math.floor(Math.random() * 10 + 2);
  for (let index = 0; index <= random; index++) {
    const img = document.createElement("img");
    const image =
      url_footerHill[Math.floor(Math.random() * url_footerHill.length)];
    img.src = image;
    img.alt = alt;
    footers.appendChild(img);
  }
  Coins.classList.add("coins");
  footers.appendChild(Coins);
  for (let index = 0; index <= 15; index++) {
    const coin = document.createElement("div");
    coin.className = "coin";
    coin.setAttribute("Disable", false);
    Coins.appendChild(coin);
  }
}
function createHeadersCloud(headers, url_platform_cloud, alt) {
  const random = Math.floor(Math.random() * 10 + 1) / 1.5;
  for (let index = 0; index <= random; index++) {
    const img = document.createElement("img");
    img.src = url_platform_cloud;
    img.alt = alt;

    headers.appendChild(img);
  }
}

createHeadersCloud(headers, url_platform_cloud, "pixel art Cloud");
createFooterHill(footers, url_footerHill, "pixel art Hill"); //url_footerPyramid

const scrollOverlayUl = document.getElementById("scrollOverlayUl");

const Mario = document.getElementById("Mario");
const Champignon = document.getElementById("Champignon");
const EndMessage = document.getElementById("EndMessage");
let progress = 0;
let stop = 0;
let dir = 0;
let ScrollState = 0;

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
function EndOfWorld() {
  if (
    scrollPosition.x * -1 >= document.body.clientWidth * 4 - 50 &&
    scrollPosition.x * -1 < document.body.clientWidth * 5
  ) {
    body.style = "--colorBgLight: black; --opacityBgLight: 0.5;"; //#5f79fe;
    //Message de Fin de jeu

    //
    scrollOverlayUl.children[4].classList.add("active");
    scrollOverlay.children[0].innerText = "WORLD 5";
  }
}

const CoinPos = document.getElementsByClassName("coin");
let IndexOfcoin = -1;

const Update = (arg) => {
  Mario.classList.remove("SayHello");
  EndMessage.classList.remove("active");

  scrollPosition = scrollBg.getBoundingClientRect();
  //console.log("event")
  //console.log(scrollPosition.x*-1, Xn1,arg);
  //Mario Movement
  const X = scrollPosition.x * -1 + arg;
  left = X + 50;
  Mario.style.left = left + "px";

  body.style = "--colorBgLight: #5f79fe;--opacityBgLight: 1;"; //

  const MarioStop = (time) => {
    return setTimeout(() => {
      Mario.classList.remove("runRight");
      Mario.classList.remove("runLeft");

      Mario.style.transform = "scaleX(1)scale(2)";
    }, time);
  };

  if (Xn1 > X || arg < 0) {
    Mario.classList.add("runRight");
    Mario.style.transform = "scaleX(-1)scale(2)";
    MarioStop(500);
  } else if (Xn1 < X || arg > 0) {
    Mario.classList.add("runLeft");
    Mario.style.transform = "scaleX(1)scale(2)";
    MarioStop(500);
  }

  if (Xn1 - X > 500 || Xn1 - X < -500) {
    console.log(Xn1 - X);
    MarioStop(0);
  }

  Xn1 = X;

  //Mario Evolution

  if (
    scrollPosition.x * -1 >= document.body.clientWidth &&
    scrollPosition.x * -1 < document.body.clientWidth * 2 &&
    Mario.classList.contains("little")
  ) {
    Mario.classList.remove("little");
    Champignon.classList.add("disable");
    Mario.classList.add("normal");
  }
  if (
    scrollPosition.x * -1 < document.body.clientWidth &&
    Mario.classList.contains("normal")
  ) {
    Mario.classList.remove("normal");
    Champignon.classList.remove("disable");
    Mario.classList.add("little");
  }

  FirstWorld();
  SecondWorld();
  ThirdWorld();
  ForthWorld();
  EndOfWorld();

  document.body.scrollTo(X, 0);
  //console.log(progress);

  if (Xn1 >= document.body.clientWidth * 4) {
  }

  RemoveCoins();
};
//console.log(CoinPos)

function setMessage(event) {
  Mario.classList.add("SayHello");
  event.preventDefault();
  const fname = document.getElementById("fname");
  const country = document.getElementById('country').value

  let Message = "Merci d'avoir Joué "
  switch (country) {
    case "2":
      Message = "Thanks for Playing "
      break;
    case "3":
      Message = "Danke fürs Spielen "
      break;
    case "4":
      Message = "Gracias por jugar "
      break;
    case "5":
      Message = "Grazie per aver giocato "
      break;

    default:
      Message = "Merci d'avoir Joué "
      break;
  }

  const EndMessageValue = document.getElementById("EndMessageValue");

  if (window.innerWidth > 650) {
    EndMessageValue.innerText = Message + fname.value + "!\n"
  } else {
    const MobileMessage = "Voici mon insta!! "
    const insta = document.createElement('a')
    insta.href = "https://www.instagram.com/mariobrossdu31/"
    insta.innerText = "Mario Toulouse"
    insta.className = "instaBulle"

    EndMessageValue.innerText = Message + fname.value + "!\n" + MobileMessage;
    EndMessageValue.appendChild(insta);
  }
  EndMessage.classList.add("active");
  setTimeout(() => {
    EndMessage.classList.remove("active");
  }, 2000)











}

function zoom(event) {
  dir = Math.round(event.deltaY / 60);
  Update(dir * 10);
}

function RemoveCoins() {
  for (let index = 0; index < CoinPos.length; index++) {
    if (
      !(
        CoinPos[index].getBoundingClientRect().left > 10 ||
        CoinPos[index].getBoundingClientRect().left < -10
      )
    ) {
      if (CoinPos[index].getAttribute("disable") == "false") {
        console.log(index);
        CoinPos[index].setAttribute("disable", true);
        if (AudioCanPlay) {
          audio.play();
        }
      }

      //coin.classList.add('active');
    } else {
      //
    }
  }
}

body.addEventListener("scroll", (e) => Update(0));
body.addEventListener("wheel", zoom);
body.addEventListener("resize", (e) => console.log(e));
