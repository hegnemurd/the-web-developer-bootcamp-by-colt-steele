console.log("Here are some pieces of code to try out.");

console.log(
  'var h1 = document.querySelector("h1"); h1.addEventListener("click", function () { alert("h1 was clicked"); });'
);

console.log(
  'h1.addEventListener("click", function () { h1.style.background = "orange"; });'
);

console.log(
  'document.querySelector("ul").addEventListener("click", function () { console.log("You clicked the ul."); });'
);

console.log(
  "********************************************************************************"
);
console.log("Click the first h1 on the page and see what happends.");
console.log("Click the list items in the ul and see what happens.");
console.log(
  "********************************************************************************"
);

console.log("Now refresh the page.");
console.log("Good.");

console.log("");

console.log("Input the next code.");
console.log('var lis = document.querySelectorAll("li");');
console.log(
  'for(var i = 0; i < lis.length; i++) { lis[i].addEventListener("click", function() { this.style.color = "pink"; }); }'
);

console.log("Now click one of the list items.");
