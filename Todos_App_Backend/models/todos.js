const mongoose = require("mongoose");
const schema = mongoose.Schema;

const todosSchema = new schema({
  description: {
    type: String,
    required: true,
  },
  user: {
    type: schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", todosSchema);
