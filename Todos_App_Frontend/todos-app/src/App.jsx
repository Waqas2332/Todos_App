import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import AddTodo from "./pages/Todos/AddTodo";
import AllTodos from "./pages/Todos/AllTodos";
import EditTodo from "./pages/Todos/EditTodo";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./store/auth-slice";
import DashBoard from "./pages/DashBoard";
import EditProfile from "./pages/EditProfile";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(login(token));
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/add-todo" element={<AddTodo />} />
      <Route path="/all-todos" element={<AllTodos />} />
      <Route path="/edit-todo/:id" element={<EditTodo />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/edit-profile" element={<EditProfile />} />
    </Routes>
  );
};

export default App;
