var numAtual = document.getElementById("currentNumber");
var newNumber = 0;

function increment() {
  newNumber += 1;
  numAtual.innerHTML = newNumber;
}

function decremet() {
  newNumber -= 1;
  numAtual.innerHTML = newNumber;
}
