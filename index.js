const exp = require("constants");
const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", function (req, res) {
//   res.send("<h1>top page!!!</h1>");
// });

// app.get("/about", function (req, res) {
//   res.send("about page");
// });

app.post("/api/v1/quiz", (req, res) => {
  const answer = req.body.answer;
  if (answer === "2") {
    res.redirect("/correct.html");
  } else {
    res.redirect("/wrong.html");
  }
  res.send(answer);
});

app.listen(3000, () => {
  console.log("I am running!");
});
