const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("We got a new request.");
//   res.send("We got your request, here is your response.");
//   res.send({ color: "red" });
//   res.send("<h1>This is my webpage</h1>");
// });

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.post("/cats", (req, res) => {
  res.send("This is the post request");
});

app.get("/cats", (req, res) => {
  res.send("Meow");
});

app.get("/dogs", (req, res) => {
  res.send("Woof");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(
    `<h1>Viewing the "${postId}" post on the ${subreddit} subreddit</h1>`
  );
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing searched.");
  }
  res.send(`<h1>Search results for: ${q}</h1>`);
});

// never put app.get for * (all) in the beginning, then you won't be able to get past it since that will show up on any requests you will be making for paths
app.get("*", (req, res) => {
  res.send("I don't know that path.");
});

app.listen(3000, () => {
  console.log("Listening on port 3000.");
});
