const startbutton = document.getElementById("start");
const restartbutton = document.getElementById("restart");
const scoreamount = document.getElementById("scoreamount");
let currentrandomamount = null;
let gameint = null;
let timeint = null;
function gamemole() {
  const main = document.getElementsByClassName("main")[0];
  for (let i = 0; i < 9; i++) {
    const hole = document.createElement("div");
    hole.id = i.toString();
    hole.classList.add("classhole");

    const mole = document.createElement("div");
    mole.classList.add("classmole");
    mole.style.display = "none";

    mole.addEventListener("click", function () {
      scoreamount.innerText = Number(scoreamount.innerText) + 1;
      whackmole();
    });

    hole.appendChild(mole);
    main.appendChild(hole);
  }
}

function whackmole() {
  if (currentrandomamount !== null) {
    const previuosrandomhole = document.getElementById(currentrandomamount);
    previuosrandomhole.querySelector(".classmole").style.display = "none";
  }
  const currentindex = Math.floor(Math.random() * 9);
  const currentrandomhole = document.getElementById(currentindex.toString());
  currentrandomhole.querySelector(".classmole").style.display = "block";
  currentrandomamount = currentindex;
}

function time() {
  const timeamount = document.getElementById("timeamount");
  const timeElement = document.getElementById("timeamount");
  timeElement.innerText = Number(timeamount.innerText) - 1;
  if (Number(timeamount.innerText) <= 0) {
    clearInterval(timeint);
    clearInterval(gameint);
    const lastmole = document.getElementById(currentrandomamount);
    lastmole.querySelector(".classmole").style.display = "none";
    alert(`niit onoo${scoreamount.innerText}`);
  }
}

function restartgame() {
  for (let i = 0; i < 9; i++) {
    const hole = document.getElementById(i);
    const mole = hole.querySelector(".classmole");
    mole.style.display = "none";
  }

  clearInterval(timeint);
  clearInterval(gameint);
  timeamount.innerHTML = `${5} `;
  scoreamount.innerHTML = "0";
}

startbutton.addEventListener("click", function () {
  restartgame();
  whackmole();
  timeint = setInterval(time, 1000);
  gameint = setInterval(whackmole, 1000);
});
restartbutton.addEventListener("click", function () {
  whackmole();
  restartgame();
  timeint = setInterval(time, 1000);
  gameint = setInterval(whackmole, 1000);
});

window.onload = gamemole;
