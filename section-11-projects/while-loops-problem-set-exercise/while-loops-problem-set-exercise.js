console.log("Printing all numbers between -10 and 19.");

var num = -10;

while (num < 20) {
  console.log(num);
  num++;
}

console.log("Printing all even numbers between 10 and 40.");

var evenNum = 9;

while (evenNum <= 40) {
  console.log(evenNum + 1);
  evenNum += 2;
}

console.log("Printing all odd numbers between 300 and 333.");

var oddNum = 299;

while (oddNum <= 333) {
  console.log(oddNum);
  oddNum += 2;
}

console.log("Printing all numbers divisible by 5 and 3 between 5 and 50.");

var divNum = 4;

while (divNum <= 50) {
  if (divNum % 5 === 0 && divNum % 3 === 0) {
    console.log(divNum);
  }
  divNum++;
}
