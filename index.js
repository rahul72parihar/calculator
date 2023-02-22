const display = document.getElementById("display");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");
let [num1, num2, mainOperator] = [null, null, null];
//Handle Clicks on Operators and Numbers
document.addEventListener("click", handleClick);
function handleClick(e) {
  //handle for clicking on number
  if (e.target.classList.contains("number")) {
    handleNumber(parseInt(e.target.value));
  }
  // handle for clicking on operator
  else if (e.target.classList.contains("operator")) {
    handleOperator(e.target.value);
  }
}
function handleNumber(digit) {
  if (isFirstEmpty()) {
    addToFirst(digit);
  } else {
    addToSecond(digit);
  }
}
//return which number to add the current digit
function isFirstEmpty() {
  return mainOperator === null;
}
function addToFirst(digit) {
  if (num1 === null) num1 = digit;
  else {
    num1 *= 10;
    num1 += digit;
  }
  display.textContent = num1;
}
function addToSecond(digit) {
  if (num2 === null) num2 = digit;
  else {
    num2 *= 10;
    num2 += digit;
  }
  display.textContent = `${num1} ${mainOperator} ${num2}`;
}

function handleOperator(operator) {
  if (!isFirstNumberAdded()) {
    renderWarning();
    return;
  }
  // if we select operator after entering second num
  // we first operate on both number and then add operator
  if (isSecondNumberAdded()) handleEqual();
  mainOperator = operator;
  display.textContent = `${num1} ${mainOperator}`;
}
function isFirstNumberAdded() {
  return num1 !== null;
}
function isSecondNumberAdded() {
  return num2 !== null;
}
function renderWarning() {
  display.textContent = "Enter Number First";
}
//handle Click on Equal Button
equalBtn.addEventListener("click", handleEqual);
function handleEqual() {
  if (num1 === null || mainOperator === null || num2 === null) {
    return;
  }
  switch (mainOperator) {
    case "+":
      num1 += num2;
      break;
    case "-":
      num1 -= num2;
      break;
    case "*":
      num1 *= num2;
      break;
    case "/":
      num1 /= num2;
      break;
  }
  [num2, mainOperator] = [null, null];
  display.textContent = num1;
}
//Handle Clear Button
clearBtn.addEventListener("click", handleClear);
function handleClear() {
  [num1, num2, mainOperator] = [null, null, null];
  display.textContent = "Enter";
}
