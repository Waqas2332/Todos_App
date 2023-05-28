import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../../components/Nav";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const todosData = {
        description: todo,
        user: localStorage.getItem("user"),
      };
      const response = await axios.post(
        "http://localhost:3000/add-todo",
        todosData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.status === 201) {
        setIsLoading(false);
        navigate("/welcome", { replace: true });
        setTodo("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Nav />
      <form
        onSubmit={handleSubmit}
        className="main w-100 d-flex justify-content-center flex-column align-items-center"
      >
        <div className="mb-3">
          <label htmlFor="add-todo" className="form-label text-white">
            Add New Todo
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
          <Link className="text-white text-decoration-none">
            {isLoading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Add Todo"
            )}
          </Link>
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
