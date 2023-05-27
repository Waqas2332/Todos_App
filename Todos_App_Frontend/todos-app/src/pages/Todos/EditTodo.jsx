import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditTodo() {
  const id = useParams();
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const todosData = {
        description: todo,
        user: localStorage.getItem("user"),
      };
      const response = await axios.put(
        `http://localhost:3000/todos/todo/${id.id}`,
        todosData
      );
      console.log(response.data);
      if (response.data === "Todo Edited Successfully") {
        navigate("/welcome", { replace: true });
        setTodo("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="main">
      <form
        onSubmit={handleSubmit}
        className="main w-100 d-flex justify-content-center flex-column align-items-center"
      >
        <div className="mb-3">
          <label htmlFor="add-todo" className="form-label text-white">
            Edit Todo
          </label>
          <input
            required
            type="text"
            value={todo}
            className="form-control"
            id="add-todo"
            placeholder="Enter Your New Todo"
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">
          <Link className="text-white text-decoration-none">Edit Todo</Link>
        </button>
      </form>
    </main>
  );
}

export default EditTodo;
