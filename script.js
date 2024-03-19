//accessing buttons using dom
let buttons = document.querySelectorAll(".button");
let compScoreDisplay = document.querySelector(".computer-score");
let yourScoreDisplay = document.querySelector(".your-score");
let winnerMsgDisplay = document.querySelector(".winner-msg-h2");
let winnerMsgDiv = document.querySelector(".winner-msg");
//-------------------------------------------------

//assigning name property to each button
names = ["stone", "paper", "scissor"];
for (let i = 0; i < 3; i++) {
  buttons[i].name = names[i];
}
//--------------------------------------
//Some CSS portion
//assign background images to the buttons using js ...
for (let j = 0; j < 3; j++) {
  buttons[j].style.backgroundImage = `url(${imageUrls[buttons[j].name]})`;
  buttons[j].style.backgroundSize = "cover";
  // buttons[j].style.backgroundRepeat = "no-repeat";
}

//computer choice random selection
let compChoice = () => {
  return buttons[Math.floor(Math.random() * 3)].name;
};

//score variables
let yourScore = 0;
let compScore = 0;

//check result function
let checkResult = (userChoice) => {
  let computerchoice = compChoice();
  if (
    //WE GET THE DRAW CONDITION

    computerchoice === userChoice &&
    (computerchoice === "stone" ||
      computerchoice === "paper" ||
      computerchoice === "scissor")
  ) {
    winnerMsgDisplay.innerText = `GAME DRAW cuz ${userChoice} fights ${computerchoice} `;
    winnerMsgDiv.style.backgroundColor = "grey";
  } else if (
    //USER WINNING CONDITION

    (computerchoice === "stone" && userChoice === "paper") ||
    (computerchoice === "paper" && userChoice === "scissor") ||
    (computerchoice === "scissor" && userChoice === "stone")
  ) {
    // console.log("user wins");
    yourScore += 1;
    yourScoreDisplay.innerText = yourScore;
    // console.log("Your score is ", yourScore);
    // console.log("Computer score is ", compScore);
    winnerMsgDisplay.innerText = `YOU WIN cuz ${userChoice} beats ${computerchoice} `;
    winnerMsgDiv.style.backgroundColor = "green";
  } else if (
    //
    //COMPUTER WINNING CONDITION
    //
    (computerchoice === "stone" && userChoice === "scissor") ||
    (computerchoice === "paper" && userChoice === "stone") ||
    (computerchoice === "scissor" && userChoice === "paper")
  ) {
    // console.log("computer wins");

    compScore += 1;
    compScoreDisplay.innerText = compScore;
    winnerMsgDisplay.innerText = `YOU LOSE cuz ${computerchoice} beats ${userChoice} `;
    winnerMsgDiv.style.backgroundColor = "red";
    // console.log("Your score is ", yourScore);
    // console.log("Computer score is ", compScore);
  }
};

// adding event listeners to every button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    checkResult(button.name);
  });
});

//RESET GAME
//function
let resetGame = () => {
  yourScore = 0;
  compScore = 0;
  compScoreDisplay.innerText = 0;
  yourScoreDisplay.innerText = 0;
  winnerMsgDisplay.innerText = "play the game now";
  winnerMsgDiv.style.backgroundColor = "grey";
};
let resetbtn = document.querySelector(".reset");
resetbtn.addEventListener("click", resetGame);
