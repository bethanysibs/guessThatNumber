let secretNumber = Math.floor(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No input!";
  }

  if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Higher.";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Lower.";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You are correct!!!";
    document.body.style.backgroundColor = "green";
  }
});
