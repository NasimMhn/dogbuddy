// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggleAnswer
document.getElementById("section2").onclick = toggleAnswer
document.getElementById("section3").onclick = toggleAnswer
document.getElementById("section4").onclick = toggleAnswer

function toggleAnswer() {
  this.classList.toggle("open")
  let plusButton = this.children[0]

  if (this.classList.contains("open")) {
    plusButton.innerHTML = "-"
  } else {
    plusButton.innerHTML = "+"
  }
  
}

