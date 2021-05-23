const question1 = document.getElementById("question1");
question1.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("right-answer")) {
    target.style.border = ".3rem solid #00B806";
  } else {
    target.style.border = ".3rem solid #EB0027";
  }
});
