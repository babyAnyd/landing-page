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

// counting

const countOne = document.querySelector(".countOne");
const countTwo = document.querySelector(".countTwo");
const countThree = document.querySelector(".countThree");
const countFour = document.querySelector(".countFour");

function countProjects(selector, end) {
  let from = 1;
  let to = end;
  let step = to > from ? 1 : -1;
  let interval = 20;

  if (from === to) {
    selector.textContent = from;
    return;
  }

  let counter = setInterval(() => {
    from += step;
    selector.textContent = from;

    if (from === to) {
      clearInterval(counter);
    }
  }, interval);
}

countProjects(countOne, 126);
countProjects(countTwo, 63);
countProjects(countThree, 18);
countProjects(countFour, 27);
