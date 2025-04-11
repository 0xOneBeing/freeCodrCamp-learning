const squares = document.querySelectorAll(".square");
let clickIndex = [];

console.log(`The number of squares is: ${squares.length}`);

squares.forEach((square) => {
  square.addEventListener("click", apply);
});

function apply(event) {
  const targetId = event.target.id;

  if (clickIndex.length === squares.length) {
    console.log(`All squares clicked`);
  } else if (clickIndex.includes(targetId)) {
    console.log(`#${targetId} has already been clicked!`);
  } else {
    clickIndex.push(targetId);
  }

  console.log(targetId);
  console.log(clickIndex);

  if (clickIndex.length === squares.length) {
    unapply();
  }

  event.target.classList.add("clicked");
}

function unapply() {
  clickIndex.forEach((id, index) => {
    const square = document.getElementById(id);

    setTimeout(() => {
      if (square) {
        square.classList.remove("clicked");
      }
    }, 1000 * (clickIndex.length - index));
  });

  clickIndex = [];
}
