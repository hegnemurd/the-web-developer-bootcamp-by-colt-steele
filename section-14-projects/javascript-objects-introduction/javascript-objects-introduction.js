var person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  city: "Dublin",
};

console.log(
  "I created an object called 'person', if you type in 'person', all the information about that person will be printed out."
);
console.log(
  "Now that you have it in front of you, choose one thing you would like to know about that person, example: 'person['firstName']'."
);
console.log(
  "Now you see their name printed out, you can either do it the previous way or this simpler way: 'person.firstName'."
);
console.log(
  "There is an issue with using dot notation, that when the property starts with a number then dot notation becomes invalid and you should use the first example (object['1prop'])."
);
console.log(
  "When you want to look up a variable same thing happens, so you should use the bracket notation again."
);
console.log(
  "When the prop names have spaces again you cannot use a dot notation and have to use a bracket notation."
);

console.log(
  "-----------------------------------------------------------------------"
);

console.log(
  "To change properties you can either use bracket notation like so: person['age'] += 1;' or you can use dot notation like so: 'person.city = 'Singapore'."
);

console.log(
  "-----------------------------------------------------------------------"
);

console.log(
  "The way I created the object 'person' was like this 'var person = { firstNam: 'Jane', lastName: 'Doe', age: 25, city: 'Dublin', };'"
);

console.log(
  "There are dfferent ways to creating objects, the previous one was one of the options. If you want to add props to the object you can do it like so: 'var person = {}' and then afterwards you can add properties with values: 'person.firstName = 'Jane';'."
);

console.log(
  "Another way to initalise an object is: 'var person = new Object();' and afterwards you can add properties to the empty object: 'person.age = 25'."
);

console.log(
  "-----------------------------------------------------------------------"
);

console.log(
  "NOTE: Objects can hold different kinds of data and here is an example of that: ' var book = { published: 2013, title: 'Golden Daffodil', isPublished: true, characters: ['Daffodil', 'Dog'], dog: { name: 'Dog', age: 1, colour: 'brown' } };'."
);
