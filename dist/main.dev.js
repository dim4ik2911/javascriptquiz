"use strict";

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
var rightArr = []; //array to count right ansers

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
};

question1.addEventListener("click", checkAnswer, {
  once: true
});
question2.addEventListener("click", checkAnswer, {
  once: true
});
question3.addEventListener("click", checkAnswer, {
  once: true
});
question4.addEventListener("click", checkAnswer, {
  once: true
});
question5.addEventListener("click", checkAnswer, {
  once: true
});
question6.addEventListener("click", checkAnswer, {
  once: true
});
question7.addEventListener("click", checkAnswer, {
  once: true
});
question8.addEventListener("click", checkAnswer, {
  once: true
});
question9.addEventListener("click", checkAnswer, {
  once: true
});
question10.addEventListener("click", checkAnswer, {
  once: true
});
var restart = document.getElementById("restart");
var rightAnswer = document.getElementsByClassName("right-answer");
var buttons = document.getElementsByTagName("button");

var restartQuiz = function restartQuiz() {
  // const buttons = document.getElementsByTagName("button");
  console.log(buttons);

  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains("right-answer") || buttons[i].classList.contains("wrong-answer")) {
      buttons[i].style.border = ".3rem solid #000";
      buttons[i].style.backgroundColor = "#fff";
      result.innerHTML = "Just do it!";
      rightArr = [];
      question1.addEventListener("click", checkAnswer, {
        once: true
      });
      question2.addEventListener("click", checkAnswer, {
        once: true
      });
      question3.addEventListener("click", checkAnswer, {
        once: true
      });
      question4.addEventListener("click", checkAnswer, {
        once: true
      });
      question5.addEventListener("click", checkAnswer, {
        once: true
      });
      question6.addEventListener("click", checkAnswer, {
        once: true
      });
      question7.addEventListener("click", checkAnswer, {
        once: true
      });
      question8.addEventListener("click", checkAnswer, {
        once: true
      });
      question9.addEventListener("click", checkAnswer, {
        once: true
      });
      question10.addEventListener("click", checkAnswer, {
        once: true
      });
    }
  }
};

var scrollOnTop = function scrollOnTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

restart.addEventListener("click", scrollOnTop);
restart.addEventListener("click", function () {
  setTimeout(restartQuiz, 1000);
}); // { once: true }
// { once: true }
// { once: true }
// { once: true }
// { once: true }
// { once: true }
// { once: true }
// { once: true }
// { once: true }
// { once: true }