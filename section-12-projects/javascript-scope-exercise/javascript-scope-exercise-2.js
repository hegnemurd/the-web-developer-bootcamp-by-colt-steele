console.log(
  "The first result 'true' shows what var num = 8; function doMath() { num += 1; if (num % 5 === 0) { return true; } else { return false;  } } num += 1; console.log(doMath()); and you see that the var is declared outside of the function as well as there is 1 added to the number before console.log, which means that the number will be altogether 10 which is divisible by 5, making the statement 'true'."
);
console.log(
  "In the function hi(), function hi() { var name = 'Capibara'; console.log(name); }, when running this function you will get 'Capibara' returned."
);
console.log(
  "I made another function called bye(), function bye() { console.log(name); }, when you call this function you have returned 'undefined', since there is no name variable declared in the bye function, it does not have a value yet. Bye fucntion cannot take the value from hi() because that value only exists in the hi() scope."
);

var num = 8;
function doMath() {
  num += 1;
  if (num % 5 === 0) {
    return true;
  } else {
    return false;
  }
}

num += 1;
console.log(doMath());

function hi() {
  var name = "Capibara";
  console.log(name);
}

console.log(hi());

function bye() {
  console.log(name);
}

console.log(bye());
