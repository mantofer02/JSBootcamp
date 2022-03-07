
// camelCase for JS variables
let numEl = document.getElementById("num-el")
let num = 0

let greetings = document.getElementById("welcome-el")
greetings.textContent = "Welcome back Marco!"

let historyEl = document.getElementById("history-el")
historyEl.textContent = ""

function increment() {
  num += 1
  numEl.textContent = num
}

function decrease() {
  if (num != 0) {
    num -= 1
  }
  numEl.innerText = num
}

function save() {
  // if I use spaces at the end inner text struggles,
  // another alternative is to use textContent
  if (historyEl.textContent === "") {
    // historyEl.innerText = "History: " + num
    historyEl.textContent = "History: " + num
  } else {
    historyEl.textContent += " - " + num 
  }
  numEl.textContent = 0
  num = 0
  console.log(num)
}

function erase() {
  // clear is a reserved JS fucntion
  historyEl.textContent = ""
}