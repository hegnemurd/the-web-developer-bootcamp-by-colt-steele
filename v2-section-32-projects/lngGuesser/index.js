const franc = require("franc");
const langs = require("langs");
const colors = require("colors");
const input = process.argv[2];
// const langCode = franc("Tere, kuidas sul ka on?");
const langCode = franc(input);
if (langCode === "und") {
  console.log(
    "Sorry, couldn't figure it out. Try it with more sample text.".red
  );
} else {
  const language = langs.where("3", langCode);
  console.log(`Our best guess is: ${language.name}.`.green);
}
