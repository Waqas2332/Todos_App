const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  todos: [
    {
      type: schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
