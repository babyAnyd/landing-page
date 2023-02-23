const getWidthSize = document.querySelector(".nav-list");
const getNavIcon = document.querySelector(".nav-btn");

// function on screen resizing
function getSize() {
  getNavIcon.style.display = "block";
  let screenWidth = window.innerWidth;
  if (screenWidth <= 1000) {
    getWidthSize.style.display = "none";
  } else {
    getWidthSize.style.display = "block";
    getNavIcon.style.display = "none ";
  }
}

window.onresize = getSize;

//show and hide nav menu in media screen size
function clicked() {
  if (getWidthSize.style.display === "none") {
    getWidthSize.style.display = "block";
  } else {
    getWidthSize.style.display = "none";
  }
}
