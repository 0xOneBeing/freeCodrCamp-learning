const squares = document.querySelectorAll(".square");
let squaresClicked = [];

function ApplyColor(event) {
  event.target.style.backgroundColor = "#0F0";
  event.target.style.color = "#FFF";
  event.target.style.transition = "background-color 1.5s, color 1.5s";

  if (squaresClicked.length == squares.length + 1) {
    console.log(`All squares clicked: ${squaresClicked}.`);
  } else if (squaresClicked.includes(event.target)) {
    console.log(
      `Square with id of ${event.target.id} has already been clicked.`
    );
  } else {
    squaresClicked.push(event.target);
  }

  console.log(squaresClicked);

  if (squaresClicked.length === squares.length) {
    UnapplyColor();
  }
}

function UnapplyColor() {
  squaresClicked.reverse();

  for (let i = 0; i < squaresClicked.length; i++) {
    /* Remove the color */
    const reverseUnapplySquares = squaresClicked[i];
    reverseUnapplySquares.style.backgroundColor = "transparent";
    reverseUnapplySquares.style.color = "initial";
    reverseUnapplySquares.style.transition = "background-color 5s, color 5s";
    reverseUnapplySquares.style.transitionDelay = "3s";
  }

  /* Also clear the array */
  squaresClicked = [];
}

for (const square of squares) {
  square.addEventListener("click", ApplyColor);
}
