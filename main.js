//variables declared
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
const restart = document.getElementById("restart");
const rightAnswer = document.getElementsByClassName("right-answer");
const buttons = document.getElementsByTagName("button");

//function to check if thr answer is right
const checkAnswer = (event) => {
  const target = event.target;
  if (target.classList.contains("right-answer")) {
    target.style.border = ".3rem solid #00B806";
    target.style.backgroundColor = "#0ACF48";
    rightArr.push(true);
    result.innerHTML = `Your score is ${rightArr.length} / 10!`;
  } else if (target.classList.contains("wrong-answer")) {
    target.style.border = ".3rem solid #D60000";
    target.style.backgroundColor = "#F00201";
  } else {
    return;
  }
  result.innerHTML = `Your score is ${rightArr.length} / 10`;
};

//functions to remove click from section, if click happened so the person cannot change the answer
function removeClick1(event) {
  const target = event.target;
  if (
    target.classList.contains("right-answer") ||
    target.classList.contains("wrong-answer")
  ) {
    question1.removeEventListener("click", checkAnswer);
  }
}
function removeClick2(event) {
  const target = event.target;
  if (
    target.classList.contains("right-answer") ||
    target.classList.contains("wrong-answer")
  ) {
    question2.removeEventListener("click", checkAnswer);
  }
}
function removeClick3(event) {
  const target = event.target;
  if (
    target.classList.contains("right-answer") ||
    target.classList.contains("wrong-answer")
  ) {
    question3.removeEventListener("click", checkAnswer);
  }
}
function removeClick4(event) {
  const target = event.target;
  if (
    target.classList.contains("right-answer") ||
    target.classList.contains("wrong-answer")
  ) {
    question4.removeEventListener("click", checkAnswer);
  }
}
function removeClick5(event) {
  const target = event.target;
  if (
    target.classList.contains("right-answer") ||
    target.classList.contains("wrong-answer")
  ) {
    question5.removeEventListener("click", checkAnswer);
  }
}
function removeClick6(event) {
  const target = event.target;
  if (
    target.classList.contains("right-answer") ||
    target.classList.contains("wrong-answer")
  ) {
    question6.removeEventListener("click", checkAnswer);
  }
}
function removeClick7(event) {
  const target = event.target;
  if (
    target.classList.contains("right-answer") ||
    target.classList.contains("wrong-answer")
  ) {
    question7.removeEventListener("click", checkAnswer);
  }
}
function removeClick8(event) {
  const target = event.target;
  if (
    target.classList.contains("right-answer") ||
    target.classList.contains("wrong-answer")
  ) {
    question8.removeEventListener("click", checkAnswer);
  }
}
function removeClick9(event) {
  const target = event.target;
  if (
    target.classList.contains("right-answer") ||
    target.classList.contains("wrong-answer")
  ) {
    question9.removeEventListener("click", checkAnswer);
  }
}
function removeClick10(event) {
  const target = event.target;
  if (
    target.classList.contains("right-answer") ||
    target.classList.contains("wrong-answer")
  ) {
    question10.removeEventListener("click", checkAnswer);
  }
}

//function to restart a quiz
const restartQuiz = () => {
  location.reload();
};

//function used to move on top when button restart clicked
const scrollOnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//event listeners

question1.addEventListener("click", checkAnswer);
question2.addEventListener("click", checkAnswer);
question3.addEventListener("click", checkAnswer);
question4.addEventListener("click", checkAnswer);
question5.addEventListener("click", checkAnswer);
question6.addEventListener("click", checkAnswer);
question7.addEventListener("click", checkAnswer);
question8.addEventListener("click", checkAnswer);
question9.addEventListener("click", checkAnswer);
question10.addEventListener("click", checkAnswer);
restart.addEventListener("click", scrollOnTop);
restart.addEventListener("click", function () {
  setTimeout(restartQuiz, 1000);
});
question1.addEventListener("click", removeClick1);
question2.addEventListener("click", removeClick2);
question3.addEventListener("click", removeClick3);
question4.addEventListener("click", removeClick4);
question5.addEventListener("click", removeClick5);
question6.addEventListener("click", removeClick6);
question7.addEventListener("click", removeClick7);
question8.addEventListener("click", removeClick8);
question9.addEventListener("click", removeClick9);
question10.addEventListener("click", removeClick10);
