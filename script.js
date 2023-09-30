let rolls = 120; //
let secretNumber = Math.trunc(Math.random() * rolls) + 1;
console.log(secretNumber);
let score = rolls;
let highScore = (document.querySelector(".highscore").textContent = "");
document.querySelector(".between").textContent = "<< 1 - " + rolls + " >>";

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No input!";
  }

  //When the number is too low
  if (guess < secretNumber && guess >= 1) {
    document.querySelector(".message").textContent = "👆 Higher.";
    score = score - 1; //score--
    document.querySelector(".score").textContent = score;
  } else if (guess >= 21) {
    document.querySelector(".message").textContent = "⛔ Invalid input!";

    //When the number is too high
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "👇 Lower.";
    score = score - 1; //score--
    document.querySelector(".score").textContent = score;

    //When the player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 You are correct!!!";
    //style structure 1
    // document.body.style.backgroundColor = "green";
    //style structure 2
    // document.querySelector("body").style = "background: green";
    document.querySelector("body .number").style = "width: 30rem";
    //style structure 3
    document.querySelector("body").style.backgroundColor = "green";

    document.querySelector(".number").textContent = secretNumber;
    //if current score is greater than highscore, replace highscore with the current score
    if (score > highScore) {
      highScore = document.querySelector(".highscore").textContent = score;
    }

    // console.log("high score" + highScore);
    // console.log(" score" + score);
  }

  //if the score is less than 0, then the player loses
  if (score <= 0) {
    document.querySelector(".message").textContent = "YOU LOSE!";
    document.body.style.backgroundColor = "red";
    document.querySelector(".score").textContent = "0";
  }
});

//again button
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * rolls) + 1;
  console.log(secretNumber);
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body .number").textContent = "?";
  document.querySelector("body .number").style = "width: 15rem";
  document.body.style.backgroundColor = "";
  score = Number((document.querySelector(".score").textContent = rolls));
});
