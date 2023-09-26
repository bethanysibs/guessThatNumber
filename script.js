let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No input!";
  }
  if (guess < secretNumber && guess >= 1) {
    document.querySelector(".message").textContent = "👆 Higher.";
    score = score - 1; //score--
    document.querySelector(".score").textContent = score;
  } else if (guess >= 21) {
    document.querySelector(".message").textContent = "⛔ Invalid input!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "👇 Lower.";
    score = score - 1; //score--
    document.querySelector(".score").textContent = score;
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 You are correct!!!";
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").textContent = secretNumber;
    let newScore = (document.querySelector(".highscore").textContent = score);
  }

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
  document.querySelector(".message").textContent = "❓Start guessing!";
  document.body.style.backgroundColor = "gray";
  document.querySelector(".number").textContent = "?";
  score = Number((document.querySelector(".score").textContent = 20));
});
