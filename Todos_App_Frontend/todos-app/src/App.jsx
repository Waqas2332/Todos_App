import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import AddTodo from "./pages/Todos/AddTodo";
import AllTodos from "./pages/Todos/AllTodos";
import EditTodo from "./pages/Todos/EditTodo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/add-todo" element={<AddTodo />} />
      <Route path="/all-todos" element={<AllTodos />} />
      <Route path="/edit-todo/:id" element={<EditTodo />} />
    </Routes>
  );
};

export default App;
