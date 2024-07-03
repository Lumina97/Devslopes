var rs = require("readline-sync");

let operation = rs.question(
  "What operation would you like to do? ( + - * / %) ",
  {
    limit: ["+", "-", "*", "/", "%"],
    limitMessage: "That is not a valid operation.",
  }
);

let num1 = rs.questionInt("Please enter the first number ", {
  limitMessage: "This is not a number. ",
});

let num2 = rs.questionInt("Please enter the second number ", {
  limitMessage: "This is not a number. ",
});

let result = "";
switch (operation) {
  case "+":
    result = add(num1, num2);
    break;
  case "-":
    result = subtract(num1, num2);
    break;
  case "/":
    result = divide(num1, num2);
    break;

  case "*":
    result = multiply(num1, num2);
    break;
}

console.log(`The result is: '${result}' `);

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}
