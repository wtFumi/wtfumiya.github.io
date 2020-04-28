let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result  > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function convertToWord(letter){
  if(letter === "r") return "”グー”";
  if(letter === "p") return "”パー”";
  return "”チョキ”";
}

function win(userChoice, computerChoice){
  const smallUserWord = "あなた".fontsize(3).sub();
  const smallCompWord = "わたし".fontsize(3).sub(); 
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} 対 ${convertToWord(computerChoice)}${smallCompWord}. あなたの勝ちです！！！`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}



function lose(userChoice, computerChoice){
  const smallUserWord = "あなた".fontsize(3).sub();
  const smallCompWord = "わたし".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} 対 ${convertToWord(computerChoice)}${smallCompWord}. あなたの負けです⤵︎⤵︎`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}


function draw(userChoice, computerChoice){
  const smallUserWord = "あなた".fontsize(3).sub();
  const smallCompWord = "わたし".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} 対 ${convertToWord(computerChoice)}${smallCompWord}. 引き分けです。。`;
  userChoice_div.classList.add('grey-glow');
  setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300)
}

//"あなたの勝ちです。ジャンケンの才能だけはあるようです。"
//"あなたの負けです。勝ちたい気持ちが全く伝わって来ません。"
//"アイコです。遊ばれてますよ。頑張ってください。"


function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
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

function main(){
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();