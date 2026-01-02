let boxes = document.querySelectorAll(".box");
let restart = document.querySelector("#restart");
let newgame = document.querySelector("new-game");
let hide = document.querySelector(".hide");
let msg = document.querySelector("#massage");
let restartbtn = document.querySelector("#restart");
let newgamebtn = document.querySelector("#new-game");

let turn = true;

const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turn) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.style.pointerEvents = "none";
    winnercheck();
  });
});

const winnercheck = () => {
  for (let pattern of winpatterns) {
    let a = boxes[pattern[0]].innerText,
      b = boxes[pattern[1]].innerText,
      c = boxes[pattern[2]].innerText;
    if (a !== "" && a === b && b === c) {
      newgamebtn.classList.remove("hide");
      msg.classList.remove("hide");
      msg.innerText = `${a} is the Winner!`;
      restartbtn.style.display = "none";
      boxes.forEach((box) => {
        box.style.pointerEvents = "none";
      });
    }
  }
};

restartbtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.style.pointerEvents = "auto";
  });
});

newgamebtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.style.pointerEvents = "auto";
    newgamebtn.classList.add("hide");
    msg.classList.add("hide");
    restartbtn.style.display = "flex";
  });
});