const userInputRef = document.querySelector(".input");
const inputTextRef = document.querySelector(".input-text");

userInputRef.addEventListener("input", userInputTextContent);

let inputCounter = 0;

function userInputTextContent(event) {
  inputCounter += 1;
  inputTextRef.textContent = `Input value: ${inputCounter} ${userInputRef.value}`;
}
