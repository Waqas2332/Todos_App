import { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/user/signin",
        user,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      if (response.data) {
        localStorage.setItem("user", response.data._id);
        navigate("/welcome", { replace: true });
      } else {
        alert(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Nav />
      <form className="w-50 mt-5 ms-5 " onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            required
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            required
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">
          <Link className="text-decoration-none text-white">Sign In</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
