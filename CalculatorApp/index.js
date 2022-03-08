// camelCase for JS variables

let operandA = 0;
let operandB = 0;
let operator = "";
let textEl = document.getElementById("text-el");

function writeDigit(n) {
  if (n == 0 && textEl.innerText == "") {
    return;
  } else {
    textEl.innerText += n;
  }
}

function writeOp(op) {
  if (!(textEl.innerText == "")) {
    operator = op;
    operandA = parseInt(textEl.innerText);
    textEl.innerText = "";
  }
}

function result() {
  n = 0;
  switch (operator) {
    case "+":
      n = operandA + operandB;
      break;
    case "-":
      n = operandA - operandB;
      break;
    case "*":
      n = operandA * operandB;
      break;
    case "/":
      n = operandA / operandB;
      break;
    default:
      break;
  }
  return n;
}

function equals() {
  if (!(operator === "" && textEl === "")) {
    operandB = parseInt(textEl.innerText);
    textEl.innerText = result();
  }
}

function clearText() {
  operandA = 0;
  operandB = 0;
  operator = "";
  textEl.innerText = "";
}
