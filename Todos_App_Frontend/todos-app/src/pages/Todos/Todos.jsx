import { useEffect, useState } from "react";
import AllTodos from "./AllTodos";
import axios from "axios";

const Todos = () => {
  const [allTodos, setAllTodos] = useState([]);
  const getTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      const data = response.data;
      setAllTodos(() => {
        return data;
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <AllTodos todos={allTodos} />
    </div>
  );
};

export default Todos;
