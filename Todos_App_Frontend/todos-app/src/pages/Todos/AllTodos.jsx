import TodoItem from "./TodoItem";
import propTypes from "prop-types";
const AllTodos = (props) => {
  console.log(props.todos);
  return (
    <div className="text-white">
      <h3 className="mt-4">List Of All Todos</h3>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem key={todo._id} id={todo._id} todo={todo.description} />
        ))}
      </ul>
    </div>
  );
};

AllTodos.propTypes = {
  todos: propTypes.array,
};

export default AllTodos;
