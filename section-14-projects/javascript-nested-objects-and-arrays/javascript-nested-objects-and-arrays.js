var posts = [
  {
    title: "Programming Popularity Around The World",
    author: "Jane Doe",
    comments: [
      "Interesting.",
      "I don't agree with the 3rd point.",
      "Excellent article! Very enlightening.",
    ],
  },
  {
    title: "How Computers Changed The World",
    author: "John Doe",
    comments: [
      "I wonder how it will change the future.",
      "What happened if computers weren't invented.",
      "I can't imagine a life without it.",
    ],
  },
];

console.log(
  "In this example I nested some objects in an array called 'var posts' and in those objects I put some values and arrays."
);
console.log("Type in this bit of code and press enter:");
console.log(
  'var posts = [ { title: "Programming Popularity Around The World", author: "Jane Doe", comments: [ "Interesting.", "I do not agree with the 3rd point.", "Excellent article! Very enlightening.", ], }, { title: "How Computers Changed The World", author: "John Doe", comments: [ "I wonder how it will change the future.", "What happened if computers were not invented.", "I cannot imagine a life without it.", ], }, ];'
);
console.log(
  "If you would like to access the object fully you can type in 'posts[0]'."
);
console.log(
  "If you would like to access the the first objects first value 'posts[0].title' (syntax: object[0].firstValueName)."
);
console.log(
  "If you would like to access the second comment in the second object type in 'posts[1].comments[1]'."
);
