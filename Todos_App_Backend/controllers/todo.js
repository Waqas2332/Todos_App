const Todo = require("../models/todos");
const User = require("../models/user");

exports.addTodo = (req, res, next) => {
  const description = req.body.description;
  const user = req.userId;
  const todoData = {
    description,
    user,
  };
  const newTodo = new Todo(todoData);
  newTodo
    .save()
    .then((result) => {
      return User.findById(req.userId);
    })
    .then((user) => {
      user.todos.push(newTodo);
      res
        .status(201)
        .json({ message: "Post Created Successfully", todo: newTodo });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllTodos = (req, res, next) => {
  Todo.find({ user: req.userId }).then((todos) => {
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
