const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

// connect to mongodb
const dbURI =
  "mongodb+srv://netninja:test1234@cluster0.ubfyfpq.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// listen for requests

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// mongoose and mongo sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog 2",
    snippet: "about my new blog",
    body: "more about my new blog",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.get("/single-blog", (req, res) => {
  Blog.findById("680a7184d08b1eb7fa0cbc0d")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

// Blog Routes
app.use("/blogs", blogRoutes);

// ROUTES
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// Login
app.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
