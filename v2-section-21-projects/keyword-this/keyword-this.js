const cat = {
  name: "Blue",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log("THIS IS: ", this);
    console.log(`${this.name}: Meow Meow Meow`);
  },
};

const meow2 = cat.meow;
