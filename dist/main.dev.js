"use strict";

//variables declared
var questions1 = document.getElementById("question1");
var questions2 = document.getElementById("question2");
var questions3 = document.getElementById("question3");
var questions4 = document.getElementById("question4");
var questions5 = document.getElementById("question5");
var questions6 = document.getElementById("question6");
var questions7 = document.getElementById("question7");
var questions8 = document.getElementById("question8");
var questions9 = document.getElementById("question9");
var questions10 = document.getElementById("question10");
var result = document.getElementById("result");
var rightArr = [];
var restart = document.getElementById("restart");
var rightAnswer = document.getElementsByClassName("right-answer");
var buttons = document.getElementsByTagName("button"); //function to check if thr answer is right

var checkAnswer = function checkAnswer(event) {
  var target = event.target;

  if (target.classList.contains("right-answer")) {
    target.style.border = ".3rem solid #00B806";
    target.style.backgroundColor = "#0ACF48";
    rightArr.push(true);
    console.log(rightArr);
    result.innerHTML = "Your score is ".concat(rightArr.length, " / 10!");
  } else if (target.classList.contains("wrong-answer")) {
    target.style.border = ".3rem solid #D60000";
    target.style.backgroundColor = "#F00201";
  } else {
    return;
  }

  result.innerHTML = "Your score is ".concat(rightArr.length, " / 10");
}; //functions to remove click from section, if click happened so the person cannot change the answer


function removeClick1(event) {
  var target = event.target;

  if (target.classList.contains("right-answer") || target.classList.contains("wrong-answer")) {
    question1.removeEventListener("click", checkAnswer);
  }
}

function removeClick2(event) {
  var target = event.target;

  if (target.classList.contains("right-answer") || target.classList.contains("wrong-answer")) {
    question2.removeEventListener("click", checkAnswer);
  }
}

function removeClick3(event) {
  var target = event.target;

  if (target.classList.contains("right-answer") || target.classList.contains("wrong-answer")) {
    question3.removeEventListener("click", checkAnswer);
  }
}

function removeClick4(event) {
  var target = event.target;

  if (target.classList.contains("right-answer") || target.classList.contains("wrong-answer")) {
    question4.removeEventListener("click", checkAnswer);
  }
}

function removeClick5(event) {
  var target = event.target;

  if (target.classList.contains("right-answer") || target.classList.contains("wrong-answer")) {
    question5.removeEventListener("click", checkAnswer);
  }
}

function removeClick6(event) {
  var target = event.target;

  if (target.classList.contains("right-answer") || target.classList.contains("wrong-answer")) {
    question6.removeEventListener("click", checkAnswer);
  }
}

function removeClick7(event) {
  var target = event.target;

  if (target.classList.contains("right-answer") || target.classList.contains("wrong-answer")) {
    question7.removeEventListener("click", checkAnswer);
  }
}

function removeClick8(event) {
  var target = event.target;

  if (target.classList.contains("right-answer") || target.classList.contains("wrong-answer")) {
    question8.removeEventListener("click", checkAnswer);
  }
}

function removeClick9(event) {
  var target = event.target;

  if (target.classList.contains("right-answer") || target.classList.contains("wrong-answer")) {
    question9.removeEventListener("click", checkAnswer);
  }
}

function removeClick10(event) {
  var target = event.target;

  if (target.classList.contains("right-answer") || target.classList.contains("wrong-answer")) {
    question10.removeEventListener("click", checkAnswer);
  }
} //function to restart a quiz


var restartQuiz = function restartQuiz() {
  console.log(buttons);

  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains("right-answer") || buttons[i].classList.contains("wrong-answer")) {
      buttons[i].style.border = ".3rem solid #000";
      buttons[i].style.backgroundColor = "#fff";
      result.innerHTML = "Just do it!";
      rightArr = [];
      question1.addEventListener("click", checkAnswer);
    }
  }
}; //function used to move on top when button restart clicked


var scrollOnTop = function scrollOnTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}; //event listeners


question1.addEventListener("click", checkAnswer);
question1.addEventListener("click", removeClick1);
question2.addEventListener("click", checkAnswer);
question2.addEventListener("click", removeClick2);
question3.addEventListener("click", checkAnswer);
question3.addEventListener("click", removeClick3);
question4.addEventListener("click", checkAnswer);
question4.addEventListener("click", removeClick4);
question5.addEventListener("click", checkAnswer);
question5.addEventListener("click", removeClick5);
question6.addEventListener("click", checkAnswer);
question6.addEventListener("click", removeClick6);
question7.addEventListener("click", checkAnswer);
question7.addEventListener("click", removeClick7);
question8.addEventListener("click", checkAnswer);
question8.addEventListener("click", removeClick8);
question9.addEventListener("click", checkAnswer);
question9.addEventListener("click", removeClick9);
question10.addEventListener("click", checkAnswer);
question10.addEventListener("click", removeClick10);
restart.addEventListener("click", scrollOnTop);
restart.addEventListener("click", function () {
  setTimeout(restartQuiz, 1000);
});