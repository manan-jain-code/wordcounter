const input = document.querySelector("textarea");
const wordCount = document.querySelector("[data-word-count]");
const characterCount = document.querySelector("[data-character-count]");
const alphabetCount = document.querySelector("[data-alphabet-count]");
const digitCount = document.querySelector("[data-digit-count]");

input.addEventListener("input", function () {
  if (input.value) {
    // Count Words
    const wordsArray = input.value.split(" ").filter((word) => word !== "");
    wordCount.innerText = wordsArray.length;

    // Count Characters
    characterCount.innerText = input.value.length;

    // Count Alphabets
    const alphabetsArray = input.value.match(/[a-zA-Z]/g);
    alphabetCount.innerText = alphabetsArray ? alphabetsArray.length : 0;

    // Count Digits
    const digitsArray = input.value.match(/[0-9]/g);
    digitCount.innerText = digitsArray ? digitsArray.length : 0;
  } else {
    wordCount.innerText =
      characterCount.innerText =
      alphabetCount.innerText =
      digitCount.innerText =
        0;
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".heading");
    const content = document.querySelector(".content");

    heading.addEventListener("animationend", function (event) {
        if (event.animationName === "shrinkMoveUp") {
        heading.classList.add("end");
        content.style.display = "block";
        setTimeout(() => {
            content.style.opacity = "1";
        }, 100); // small delay to trigger the opacity transition
        }
    });
});
