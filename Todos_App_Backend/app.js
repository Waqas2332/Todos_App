const path = require("path");

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/user");
const todoRoutes = require("./routes/todo");
const User = require("./models/user");
const multer = require("multer");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/jpeg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(multer({ storage: fileStorage }).single("image"));
app.use("/images", express.static(path.join(__dirname, "images")));

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
