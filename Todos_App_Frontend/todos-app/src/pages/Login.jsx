import { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { login } from "../store/auth-slice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    try {
      setIsLoading(true);
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
        setIsLoading(false);
        dispatch(login(response.data.token));
        localStorage.setItem("token", response.data.token);
        navigate("/welcome", { replace: true });
      }
    } catch (error) {
      if (error.response.status === 401) {
        setIsLoading(true);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
          allowHtml: true,
          allowOutsideClick: true,
          allowEscapeKey: true,
          allowEnterKey: true,
        });
      }
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
          <Link className="text-decoration-none text-white">
            {isLoading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
