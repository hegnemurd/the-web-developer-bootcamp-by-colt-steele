const input = document.querySelector("input");
const h2 = document.querySelector("h2");

// input.addEventListener("change", function (e) {
//   console.log(
//     "This function only fires when you leave the input and something is different in the input to the last time."
//   );
// });

input.addEventListener("input", function (e) {
  //   console.log(
  //     "This function fires when something in the input changes without leaving the input."
  //   );
  h2.innerText = input.value;
});
