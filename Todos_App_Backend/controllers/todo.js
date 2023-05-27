const Todo = require("../models/todos");
exports.addTodo = (req, res, next) => {
  const description = req.body.description;
  const user = req.user;
  const todoData = {
    description,
    user,
  };
  const newTodo = new Todo(todoData);
  newTodo
    .save()
    .then(() => {
      return res.send("Todo Added SuccuessFully");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllTodos = (req, res, next) => {
  Todo.find().then((todos) => {
    res.json(todos);
  });
};

exports.deleteTodos = (req, res, next) => {
  const id = req.params.id;
  Todo.findByIdAndDelete(id)
    .then(() => {
      return res.send("Deleted Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateTodo = (req, res, next) => {
  const description = req.body.description;
  const id = req.params.id;
  Todo.findByIdAndUpdate(id, { description }, { new: true })
    .then(() => {
      return res.send("Todo Edited Successfully");
    })
    .catch((err) => console.log(err));
};
