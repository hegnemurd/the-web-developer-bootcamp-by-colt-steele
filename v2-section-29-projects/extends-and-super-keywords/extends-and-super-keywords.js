// EXTENDS keyword, extends the Cat and Dog class to Pet class
// SO Cat & Dog are extensions of Pet
// SUPER keyword let's the extensions call the constructor of the super class
// which in this case super is Pet
// Super let's Cat/Dog use the name&age, that are passed as params to Pet, in their own constructor for methods
// super is a reference to Pet in this case

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating.`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return "Meoww";
  }
}

class Dog extends Pet {
  woof() {
    return "Wooof";
  }
  eat() {
    return `${this.name} scarfs his food.`;
  }
}
