
// camelCase for JS variables

let operandA = 0
let operandB = 0
let operator = ""
let textEl = document.getElementById("text-el")

function writeOne() {
  textEl.innerText += "1"
}

function writeTwo() {
  textEl.innerText += "2"
}

function writeThree() {
  textEl.innerText += "3"
}
function writeFour() {
  textEl.innerText += "4"
}

function writeFive() {
  textEl.innerText += "5"
}

function writeSix() {
  textEl.innerText += "6"
}

function writeSeven() {
  textEl.innerText += "7"
}

function writeEight() {
  textEl.innerText += "8"
}

function writeNine() {
  textEl.innerText += "9"
}

function writeZero() {
  if (!(textEl.innerText === "")) {
    textEl.innerText += "0"
  }
}
