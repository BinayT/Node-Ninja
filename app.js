const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

//Connect to MongoDB server
const dbURI =
  "mongodb+srv://binay:binay@thenetninjanodejs.woesg.mongodb.net/netninja?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

//register view engines
app.set("view engine", "ejs");

app.listen(3000);

//middleware & static files
app.use(express.static("public"));

app.use(morgan("dev"));

/* app.use((req, res, next) => {
  console.log("new request is made");
  console.log("host", req.hostname);
  console.log("host", req.path);
  console.log("host", req.method);
  next();
}); 

app.use((req, res, next) => {
  console.log("this is a middleware okay ?");
  next();
}); */

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
