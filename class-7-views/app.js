const express = require("express");

const app = express();

//register view engines
app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    { title: "Hello there", snippet: "Yo yo im trying node.js ok baby" },
    {
      title: "Welcome to this course",
      snippet: "I'm trying to be backend developer",
    },
    { title: "Node.js Rock", snippet: "We all know ir, right ?" },
  ];
  res.render("index", { name: "Binay", blogs });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

app.use((req, res) => {
  res.status(404).render("404");
});
