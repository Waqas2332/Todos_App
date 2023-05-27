const User = require("../models/user");
const bycrypt = require("bcryptjs");
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
            .then(() => {
              console.log("User Saved");
              res.send("User Added Successfully");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    } else {
      res.send("User Already Exists");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.signIn = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.send(false);
    }
    const passwordMatch = await bycrypt.compare(password, user.password);
    console.log(passwordMatch);
    if (!passwordMatch) {
      return res.send(false);
    }
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};
