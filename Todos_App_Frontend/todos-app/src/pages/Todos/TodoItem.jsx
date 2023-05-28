import "./TodoItem.css";
import { AiFillDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { deleteItem } from "../../store/todo.slice";
import { useDispatch } from "react-redux";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDeleteTodo = () => {
    Swal.fire({
      title: "Confirm ? ",
      text: "Do You Want to Delete Your Todo",
      icon: "question",
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: "No",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const response = axios.delete(
          `http://localhost:3000/todos/todo/${props.id}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        dispatch(deleteItem(props.id));
      }
    });
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
