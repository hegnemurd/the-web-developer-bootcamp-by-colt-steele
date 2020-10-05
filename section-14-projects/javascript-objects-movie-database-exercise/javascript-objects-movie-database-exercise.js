console.log(
  "In this example we are creating an array with movies (with title, hasWatched and rating props) and then we will loop over the array and print out each object."
);
console.log("Type in the code underneath:");
console.log(
  'var movies = [ { title: "Frozen", hasWatched: false, rating: 4.5, }, { title: "Sherklock Holmes", hasWatched: true, rating: 5, }, { title: "Mission Impossible", hasWatched: false, rating: 4, }, { title: "The Lovely Bones", hasWatched: true, rating: 3.5, } ];'
);
console.log(
  "Now that we have the objects created, we need to loop over them and make sentences to see if you have watched them or not."
);
console.log("Type in the following code:");
console.log(
  'movies.forEach(function(movie){ var result = "You have "; if(movie.hasWatched){ result += "watched "; } else { result += "not seen "; } result += "\\"" + movie.title + "\\" - "; result += movie.rating + " stars."; console.log(result) });'
);
console.log(
  "To make it more readable or easier, we can move some of the code into a function instead."
);

console.log("For example:");

console.log(
  'function buildString(movie){ var result = "You have "; if(movie.hasWatched){ result += "watched "; } else { result += "not seen "; } result += "\\"" + movie.title + "\\" - "; result += movie.rating + " stars."; return result; }'
);

console.log(
  "You can call the function and make it loop over the movies by typing in:"
);

console.log(
  "movies.forEach(function(movie){console.log(buildString(movie)); });"
);
