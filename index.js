const display = document.getElementById("display");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");
let num1 = null;
let num2 = null;
let mainOperator = null;
//Handle Clicks on Operators and Numbers
document.addEventListener("click", handleClick);
function handleClick(e) {
  if (e.target.classList.contains("number")) {
    handleNumber(parseInt(e.target.value));
  } else if (e.target.classList.contains("operator")) {
    handleOperator(e.target.value);
  }
}
function handleNumber(num) {
  if (mainOperator === null) {
    if (num1 === null) num1 = num;
    else {
      num1 *= 10;
      num1 += num;
    }
    display.textContent = num1;
  } else {
    if (num2 === null) num2 = num;
    else {
      num2 *= 10;
      num2 += num;
    }
    display.textContent = num1 + mainOperator + num2;
  }
}
function handleOperator(operator) {
  if (num1 === null) {
    display.textContent = "Enter Number First";
    return;
  }
  if (num2 !== null) handleEqual();
  mainOperator = operator;
  display.textContent = num1 + mainOperator;
}
//handle Click on Equal Button
equalBtn.addEventListener("click", handleEqual);
function handleEqual() {
  if (num1 === null || mainOperator === null || num2 === null) return;
  if (mainOperator === "+") num1 = num1 + num2;
  else if (mainOperator === "-") num1 -= num2;
  else if (mainOperator === "*") num1 *= num2;
  else if (mainOperator === "/") num1 /= num2;
  num2 = null;
  mainOperator = null;
  display.textContent = num1;
}
//Handle Clear Button
clearBtn.addEventListener("click", handleClear);
function handleClear() {
  num1 = null;
  mainOperator = null;
  num2 = null;
  display.textContent = 0;
}
