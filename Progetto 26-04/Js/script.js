// Animazione svg

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function animateOpacity(element, duration) {
  let op = 0;
  let increment = 0.2;

  const interval = setInterval(function () {
    if (op >= 1) {
      increment = -0.2;
    } else if (op <= 0) {
      increment = 0.8;
    }
    op += increment;
    element.style.opacity = op;
  }, duration / 20);
}

window.onload = function () {
  const allMs = document.querySelectorAll("#mArtwork g");
  const shuffledMs = shuffleArray(Array.from(allMs));
  const selectedMs = shuffledMs.slice(0, 100);

  selectedMs.forEach((m) => {
    const randomDelay = Math.random() * 5000;
    setTimeout(() => {
      animateOpacity(m, 8000);
    }, randomDelay);
  });
};

// Cambio classe header

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const button = document.getElementById("button");
  const searchBar = document.getElementById("searchBar");
  const changePoint = 400;

  if (window.scrollY > changePoint) {
    header.classList.add("changeBackground");
    searchBar.classList.add("changeBg");
    button.classList.add("changeColor");
    button.classList.remove("buttonUl");
  } else {
    header.classList.remove("changeBackground");
    button.classList.remove("changeColor");
    button.classList.add("buttonUl");
    searchBar.classList.remove("changeBg");
  }
});
