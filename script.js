let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

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
    let newScore = (document.querySelector(".highscore").textContent = score);
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
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body .number").style = "";

  document.body.style.backgroundColor = "";
  score = Number((document.querySelector(".score").textContent = 20));
});
