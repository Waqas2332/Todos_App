const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todo");

router.post("/add-todo", todosController.addTodo);
router.get("/todos", todosController.getAllTodos);
router.delete("/todos/todo/:id", todosController.deleteTodos);
router.put("/todos/todo/:id", todosController.updateTodo);
module.exports = router;
