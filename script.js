let rolls = 20; //
let secretNumber = Math.trunc(Math.random() * rolls) + 1;
console.log(secretNumber);
let score = Number((document.querySelector(".score").textContent = rolls));

let highScore = (document.querySelector(".highscore").textContent = "0");
document.querySelector(".between").textContent = "<< 1 - " + rolls + " >>";

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (guess === secretNumber) {
    displayMessage("🎉 You are correct!!!");

    //style structure 1
    document.querySelector("body .number").style = "width: 30rem";

    //style structure 2
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = secretNumber;

    //if current score is greater than highscore, replace highscore with the current score
    if (score > highScore) {
      highScore = document.querySelector(".highscore").textContent = score;
      alert("New highscore! " + highScore);
    }
    //refactored
  } else if (guess !== secretNumber) {
    displayMessage(
      guess < secretNumber && guess >= 0 ? "👆 Higher." : "👇 Lower."
    );
    score = score - 1; //score--
    document.querySelector(".score").textContent = score;

    if (guess > rolls + 1) {
      displayMessage("⛔ Invalid input!");
    }
    if (!guess) {
      displayMessage("⛔ No input!");
    }
  }
  //long cut or not refactored
  //When the number is too low
  // else if (guess < secretNumber && guess >= 1) {
  //   document.querySelector(".message").textContent = "👆 Higher.";
  //   score = score - 1; //score--
  //   document.querySelector(".score").textContent = score;
  // } else if (guess >= rolls + 1) {
  //   document.querySelector(".message").textContent = "⛔ Invalid input!";

  //   //When the number is too high
  // } else if (guess > secretNumber) {
  //   document.querySelector(".message").textContent = "👇 Lower.";
  //   score = score - 1; //score--
  //   document.querySelector(".score").textContent = score;

  //if the score is less than 0, then the player loses
  if (score <= 0) {
    displayMessage("YOU LOSE!");
    document.body.style.backgroundColor = "red";
    document.querySelector(".score").textContent = "0";
  }
});

//again button
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * rolls) + 1;
  score = Number((document.querySelector(".score").textContent = rolls));

  console.log(secretNumber);

  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector("body .number").textContent = "?";
  document.querySelector("body .number").style = "width: 15rem";
  document.body.style.backgroundColor = "";
});
