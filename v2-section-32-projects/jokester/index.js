// jokes and colors are installed locally, but you can also install npm packages globally
// for example: npm i -g cowsay
// that code can be used from anywhere in the folders, files

const jokes = require("give-me-a-joke");
const colors = require("colors");
// const cowsay = require("cowsay");
jokes.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow);
});
