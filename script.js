const buttons = document.querySelectorAll("button");
const equal = document.querySelector("#equal");
const screen = document.querySelector(".screen");
const clear = document.querySelector("#C");
const back = document.querySelector(".back");

let expression = "";
screen.innerText = "0";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.value;

    // Prevent appending value of buttons like C, =, back
    if (!value) return; 

    expression += value;
    screen.innerText = expression;
  });
});

equal.addEventListener("click", () => {
  try {
    let finalVal = eval(expression);
    screen.innerText = finalVal;
    expression = finalVal.toString(); // allow continued calculation
  } catch {
    screen.innerText = "Error";
    expression = "";
  }
});

clear.addEventListener("click", () => {
  expression = "";
  screen.innerText = "0";
});

back.addEventListener("click", () => {
  expression = expression.slice(0, -1); // remove last character
  screen.innerText = expression || "0"; // show 0 if empty
});
