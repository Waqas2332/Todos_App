const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/isAuth");
const todosController = require("../controllers/todo");

router.post("/add-todo", isAuth, todosController.addTodo);
router.get("/todos", isAuth, todosController.getAllTodos);
router.delete("/todos/todo/:id", isAuth, todosController.deleteTodos);
router.put("/todos/todo/:id", isAuth, todosController.updateTodo);
module.exports = router;
