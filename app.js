let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  const smallUserWord = "player".fontsize(3).sub();
  const smallCompWord = "Comp".fontsize(3).sub();
  const user_div = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(
    user
  )}${smallUserWord}beats ${convertToWord(computer)}${smallCompWord}You Win!!!`;
  user_div.classList.add("green-glow");
  setTimeout(function () {
    user_div.classList.remove("green-glow");
  }, 1000);
}

function lose(user, computer) {
  const smallUserWord = "player".fontsize(3).sub();
  const smallCompWord = "Comp".fontsize(3).sub();
  const user_div = document.getElementById(user);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(
    user
  )}${smallUserWord}loses to ${convertToWord(
    computer
  )}${smallCompWord}You lost. Better luck next time!`;
  user_div.classList.add("red-glow");
  setTimeout(function () {
    user_div.classList.remove("red-glow");
  }, 1000);
}

function draw(user, computer) {
  const smallUserWord = "player".fontsize(3).sub();
  const smallCompWord = "Comp".fontsize(3).sub();
  const user_div = document.getElementById(user);
  result_p.innerHTML = `${convertToWord(
    user
  )}${smallUserWord}has drawn with ${convertToWord(
    computer
  )}${smallCompWord}It's a draw!!!`;
  user_div.classList.add("yellow-glow");
  setTimeout(function () {
    user_div.classList.remove("yellow-glow");
  }, 1000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "pr":
    case "rs":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
