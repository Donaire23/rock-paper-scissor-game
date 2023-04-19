
const userPick = document.querySelector("#playerPick");
const resultPick = document.querySelector("#resultPick");
const computerPick = document.querySelector("#aiPick");
const playScore = document.querySelector("#playScore");
const aiScore = document.querySelector("#aiScore");
const history = document.querySelector("#mathHistory");

let aiChoice = ["👊", "✋", "✌"];

let playerScore = 0;
let computerScore = 0;
let matchHistory = [];
let rounds = 0;




function rockBtn () {
  let rckBtn = document.querySelector("#rock").innerHTML = "👊";
  let usersPick = document.querySelector("#playerPick").innerHTML = rckBtn;
  userPick.style.fontSize = "150px";
  userPick.style.marginLeft = "45px"
  let randChoice = Math.round(Math.random() * 2);
  computerPick.innerHTML  = aiChoice[randChoice];

  computerPick.style.fontSize = "150px"
  computerPick.style.marginTop = "250px"
  
  if(rckBtn == "👊" && computerPick.innerHTML == "👊" && rounds == 10 && playScore == computerScore) { 
    resultPick.innerHTML = "Tie";
    rounds++;
    matchHistory.push(`Round ${rounds}: ${rckBtn} vs ${computerPick.innerHTML} - ${resultPick.innerHTML}`);
    document.querySelector("#mathHistory").innerHTML = matchHistory.join("<br>");
    alert("YOU WIN");
  } else if (rckBtn == "👊" && computerPick.innerHTML == "✋") {
    resultPick.innerHTML = "A.I WIN";
    computerScore++;
    aiScore.innerHTML = computerScore;
    rounds++;
    matchHistory.push(`Round ${rounds}: ${rckBtn} vs ${computerPick.innerHTML} - ${resultPick.innerHTML}`);
    document.querySelector("#mathHistory").innerHTML = matchHistory.join("<br>");
  } else if (rckBtn == "👊" && computerPick.innerHTML == "✌") {
    resultPick.innerHTML = "Player Win";
    playerScore++;
    playScore.innerHTML = playerScore;
    rounds++;
    matchHistory.push(`Round ${rounds}: ${rckBtn} vs ${computerPick.innerHTML} - ${resultPick.innerHTML}`);
    document.querySelector("#mathHistory").innerHTML = matchHistory.join("<br>");
  }

}

function paperBtn () {
  let paperBtn = document.querySelector("#paper").innerHTML = "✋";
  let usersPick = document.querySelector("#playerPick").innerHTML = paperBtn;
  userPick.style.fontSize = "150px";
  userPick.style.marginLeft = "45px"
  let randChoice = Math.round(Math.random() * 2);
  computerPick.innerHTML  = aiChoice[randChoice];
  computerPick.style.fontSize = "150px"
  computerPick.style.marginTop = "250px"

  if(paperBtn == "✋" && computerPick.innerHTML == "✋") { 
    resultPick.innerHTML = "Tie";
    rounds++;
  } else if (paperBtn == "✋" && computerPick.innerHTML == "✌") {
    resultPick.innerHTML = "A.I WIN";
    computerScore++;
    aiScore.innerHTML = computerScore;
    rounds++;
  } else if (paperBtn == "✋" && computerPick.innerHTML == "👊") {
    resultPick.innerHTML = "Player Win";
    playerScore++;
    playScore.innerHTML = playerScore;
    rounds++;
  }
  matchHistory.push(`Round ${rounds}: ${paperBtn} vs ${computerPick.innerHTML} - ${resultPick.innerHTML}`);
  document.querySelector("#mathHistory").innerHTML = matchHistory.join("<br>");
}

function scissorBtn () {
  let scissorBtn = document.querySelector("#scissor").innerHTML = "✌";
  let usersPick = document.querySelector("#playerPick").innerHTML = scissorBtn;
  userPick.style.fontSize = "150px";
  userPick.style.marginLeft = "45px"
  let randChoice = Math.round(Math.random() * 2);
  computerPick.innerHTML  = aiChoice[randChoice];
  computerPick.style.fontSize = "150px"
  computerPick.style.marginTop = "250px"

  if(scissorBtn == "✌" && computerPick.innerHTML == "✌") { 
    resultPick.innerHTML = "Tie";
    rounds++;
  } else if (scissorBtn == "✌" && computerPick.innerHTML == "👊") {
    resultPick.innerHTML = "A.I WIN";
    computerScore++;
    aiScore.innerHTML = computerScore;
    rounds++;
  } else if (scissorBtn == "✌" && computerPick.innerHTML == "✋") {
    resultPick.innerHTML = "Player Win";
    playerScore++;
    playScore.innerHTML = playerScore;
    rounds++;
  } 
  matchHistory.push(`Round ${rounds}: ${scissorBtn} vs ${computerPick.innerHTML} - ${resultPick.innerHTML}`);
  document.querySelector("#mathHistory").innerHTML = matchHistory.join("<br>");
}