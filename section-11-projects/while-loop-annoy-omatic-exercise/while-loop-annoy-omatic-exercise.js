var answer = prompt("Are we there yet?");

while (answer !== "yes" && answer !== "yeah" && answer.indexOf("yes") === -1) {
  var answer = prompt("Are we there yet?");
}

alert("Yay, we made it!!!");

//alternatively without using while loop
// if(answer === "yes") {
//     alert("Yay, we made it!!!"
// } else {
// }
