document.querySelector("button").addEventListener("click", function (event) {
  console.log(event);
});

// const input = document.querySelector("input");
// input.addEventListener("keydown", function (event) {
//   console.log(event.key);  // -- represents the code (press a on your keyboard and this prints out "a")
//   console.log(event.code);  // -- represents where the key you pressed on your keyboard (press shift and the code will say if it was the rightshift or leftshift)
// });

// input.addEventListener("keyup", function () {
//     console.log("KEY UP");
//   });

window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP");
      break;
    case "ArrowDown":
      console.log("DOWN");
      break;
    case "ArrowLeft":
      console.log("LEFT");
      break;
    case "ArrowRight":
      console.log("RIGHT");
      break;
    default:
      console.log("IGNORED");
  }
});
