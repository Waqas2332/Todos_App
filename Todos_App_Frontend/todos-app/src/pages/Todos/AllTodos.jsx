import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import propTypes from "prop-types";
const AllTodos = (props) => {
  return (
    <div className="text-white">
      <h3 className="mt-4">List Of All Todos</h3>
      {props.todos.length > 0 ? (
        <ul>
          {props.todos.map((todo) => (
            <TodoItem key={todo._id} id={todo._id} todo={todo.description} />
          ))}
        </ul>
      ) : (
        <div>
          <p>No Todo Added</p>
          <button>
            <Link
              className="btn btn-primary text-decoration-none text-white"
              to="/add-todo"
            >
              Add Todo
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

AllTodos.propTypes = {
  todos: propTypes.array,
};

export default AllTodos;
