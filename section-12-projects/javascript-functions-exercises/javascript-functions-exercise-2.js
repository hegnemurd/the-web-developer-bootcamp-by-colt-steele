function test(x) {
  return x * 2;
  //the following next two lines will not run, since a value is already returned
  console.log(x);
  return x / 2;
}

console.log(test(40));
