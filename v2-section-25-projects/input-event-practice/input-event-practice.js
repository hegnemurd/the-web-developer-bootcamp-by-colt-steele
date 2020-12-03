const h2 = document.querySelector("h2");
const input = document.querySelector("input");

input.addEventListener("input", function (e) {
  if (!this.value) {
    h2.innerText = `Enter Your Username`;
  } else {
    h2.innerText = `Welcome, ${this.value}`;
  }
});
