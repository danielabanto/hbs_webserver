require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {
  err && console.log("error:", err);
});

// Servir contenido estatico
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Daniel Abanto",
    titulo: "Proyecto de Node",
  });
});

app.get("/generic", function (req, res) {
  res.render("generic", {});
});

app.get("/elements", function (req, res) {
  res.render("elements", {});
});

app.get("*", function (req, res) {
  res.render("404", {});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
