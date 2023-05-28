import { useEffect } from "react";
import AllTodos from "./AllTodos";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setItem } from "../../store/todo.slice";

const Todos = () => {
  const items = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const getTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todos", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch(setItem(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <AllTodos todos={items} />
    </div>
  );
};

export default Todos;
