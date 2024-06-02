const input = document.querySelector("textarea");
const wordCount = document.querySelector("[data-word-count]");
const characterCount = document.querySelector("[data-character-count]");
const alphabetCount = document.querySelector("[data-alphabet-count]");
const digitCount = document.querySelector("[data-digit-count]");

input.addEventListener("input", function () {
    if (input.value) {
        const wordsArray = input.value.split(" ").filter((word) => word !== "");
        wordCount.innerText = wordsArray.length;

        characterCount.innerText = input.value.length;

        const alphabetsArray = input.value.match(/[a-zA-Z]/g);
        alphabetCount.innerText = alphabetsArray ? alphabetsArray.length : 0;

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
            }, 100);
        }
    });
});

const coords = { x: 0, y: 0 };
const pointer = document.querySelector(".circle");
window.addEventListener("mousemove", function (e) {
    pointer.style.left = e.clientX + 1 + "px";
    pointer.style.top = e.clientY + 3 + "px";
});
window.addEventListener("click", function () {
    pointer.style.backgroundImage = "url('pop_cat_open.png')";
    setTimeout(function () {
        pointer.style.backgroundImage = "url('pop_cat_closed.png')";
    }, 200);
});