const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/user");
const todoRoutes = require("./routes/todo");
const User = require("./models/user");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  User.findById("64718de77586a4bc394be34e")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/user", userRoutes);
app.use(todoRoutes);

mongoose
  .connect(
    "mongodb+srv://wmunir232:wmunir232@cluster0.4kzvqnz.mongodb.net/todos"
  )
  .then(() => {
    console.log("Connected");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
