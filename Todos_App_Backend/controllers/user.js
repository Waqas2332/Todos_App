const User = require("../models/user");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.userRegister = async (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const age = req.body.age;
  let password = req.body.password;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      bycrypt.hash(password, 10, (err, password) => {
        if (err) {
          console.log(err);
        } else {
          const newUser = {
            firstName,
            lastName,
            email,
            age,
            password,
          };
          const regUser = new User(newUser);
          regUser
            .save()
            .then((result) => {
              res.json({ message: "User Created", userId: result._id });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    } else {
      res.status(409).json({ message: "User Alreay Exists" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.signIn = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(401).json({ message: "User Doesn't Exists" });
    }
    const passwordMatch = await bycrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Password Didn't Match" });
    }
    const token = jwt.sign(
      { email: user.email, userId: user._id.toString() },
      "secretKey",
      { expiresIn: "1h" }
    );
    res.json({ token: token, userId: user._id.toString() });
  } catch (error) {
    console.log(error);
  }
};

exports.getUserData = (req, res, next) => {
  let imageUrl;
  User.findById(req.userId)
    .then((user) => {
      if (user.imageUrl) {
        imageUrl = `http://localhost:3000/${user.imageUrl}`;
      } else {
        imageUrl = undefined;
      }
      const newUser = {
        ...user._doc,
        imageUrl: imageUrl,
      };

      res.status(201).json(newUser);
    })
    .catch((err) => res.json({ message: err.message }));
};

exports.postUploadImage = (req, res, next) => {
  const image = req.file;
  if (!image) {
    res.status(422).json({ message: "Image Not Provided" });
  }
  const imageUrl = image.path;
  User.findById(req.userId)
    .then((user) => {
      user.imageUrl = imageUrl;
      user.save();
    })
    .then(() => {
      res.status(201).json({ message: "Image Stored Successfully" });
    })
    .catch((err) =>
      res.status(422).json({ message: "Error in Uploading Image" })
    );
};

exports.editUser = (req, res, next) => {
  const updatedFirstName = req.body.firstName;
  const updatedLastName = req.body.lastName;
  const updatedAge = req.body.age;
  User.findById(req.userId).then((user) => {
    user.firstName = updatedFirstName;
    user.lastName = updatedLastName;
    user.age = updatedAge;

    user.save().then(() => {
      res.status(201).json({ message: "User Updated Successfully" });
    });
  });
};
