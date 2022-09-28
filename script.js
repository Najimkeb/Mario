const scrollOverlay = document.getElementById("scrollOverlay");
const scrollBg = document.getElementById("scrollBg");
var left = 0;
let scale = 0;

function zoom(event) {
  if (left > document.body.clientWidth * 4) {
    left = document.body.clientWidth * 4;
  } else if (left < 0) {
    left = 0;
  } else {
    left += event.deltaY * 0.5;
  }
  document.body.scrollTo(left, 0);
  console.log(left, event.deltaY, document.body.clientWidth);
}

scrollOverlay.onwheel = zoom;
scrollBg.onwheel = zoom;
