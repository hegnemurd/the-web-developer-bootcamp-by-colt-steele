const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");

// for (let button of buttons) {
//   button.addEventListener("click", function () {
//     button.style.backgroundColor = randomColor();
//     button.style.color = randomColor();
//   });
// }

for (let button of buttons) {
  button.addEventListener("click", colorise);
}

const h2s = document.querySelectorAll("h2");

// for (let h2 of h2s) {
//   h2.addEventListener("click", function () {
//     h2.style.backgroundColor = randomColor();
//     h2.style.color = randomColor();
//   });
// }

for (let h2 of h2s) {
  h2.addEventListener("click", colorise);
}

function colorise() {
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}
