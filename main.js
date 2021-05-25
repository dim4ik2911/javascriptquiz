const questions1 = document.getElementById("question1");
const questions2 = document.getElementById("question2");
const questions3 = document.getElementById("question3");
const questions4 = document.getElementById("question4");
const questions5 = document.getElementById("question5");
const questions6 = document.getElementById("question6");
const questions7 = document.getElementById("question7");
const questions8 = document.getElementById("question8");
const questions9 = document.getElementById("question9");
const questions10 = document.getElementById("question10");
const result = document.getElementById("result");

let rightArr = [];
//array to count right ansers

const checkAnswer = (event) => {
  const target = event.target;
  if (target.classList.contains("right-answer")) {
    target.style.border = ".3rem solid #00B806";
    target.style.backgroundColor = "#0ACF48";
    rightArr.push(true);
    console.log(rightArr);
    result.innerHTML = `Your score is ${rightArr.length} / 10!`;
  } else if (target.classList.contains("wrong-answer")) {
    target.style.border = ".3rem solid #D60000";
    target.style.backgroundColor = "#F00201";
  } else {
    return;
  }

  result.innerHTML = `Your score is ${rightArr.length} / 10`;
};

question1.addEventListener("click", checkAnswer, { once: true });
question2.addEventListener("click", checkAnswer, { once: true });
question3.addEventListener("click", checkAnswer, { once: true });
question4.addEventListener("click", checkAnswer, { once: true });
question5.addEventListener("click", checkAnswer, { once: true });
question6.addEventListener("click", checkAnswer, { once: true });
question7.addEventListener("click", checkAnswer, { once: true });
question8.addEventListener("click", checkAnswer, { once: true });
question9.addEventListener("click", checkAnswer, { once: true });
question10.addEventListener("click", checkAnswer, { once: true });

const restart = document.getElementById("restart");
const rightAnswer = document.getElementsByClassName("right-answer");
const buttons = document.getElementsByTagName("button");

const restartQuiz = () => {
  // const buttons = document.getElementsByTagName("button");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++) {
    if (
      buttons[i].classList.contains("right-answer") ||
      buttons[i].classList.contains("wrong-answer")
    ) {
      buttons[i].style.border = ".3rem solid #000";
      buttons[i].style.backgroundColor = "#fff";
      result.innerHTML = `Just do it!`;
    }
  }
};

restart.addEventListener("click", restartQuiz);
