import "./TodoItem.css";
import { AiFillDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EditTodo from "./EditTodo";

const TodoItem = (props) => {
  const [editTodo, setEditTodo] = useState(false);
  const navigate = useNavigate();
  const handleDeleteTodo = async () => {
    const conf = confirm("Are you Sure You Want To Delete ?");
    if (conf) {
      const response = await axios.delete(
        `http://localhost:3000/todos/todo/${props.id}`
      );
      console.log(response.data);
    } else {
      return;
    }
  };
  const handleEditTodo = () => {
    navigate(`/edit-todo/${props.id}`, { replace: true });
  };
  return (
    <div className="todo">
      <li>{props.todo}</li>
      <div className="actions">
        <button className="btn btn-danger" onClick={handleDeleteTodo}>
          <AiFillDelete size={24} color="black" />
        </button>
        <button className="btn btn-success ms-4" onClick={handleEditTodo}>
          <BsPencilSquare size={24} color="black" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
