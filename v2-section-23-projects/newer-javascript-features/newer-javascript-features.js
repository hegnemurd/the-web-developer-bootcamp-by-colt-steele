// ********** DEFAULT PARAMS **********

function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

rollDie(20);
