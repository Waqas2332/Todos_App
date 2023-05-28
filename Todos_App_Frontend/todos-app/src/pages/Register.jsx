import { useState } from "react";
import Nav from "../components/Nav";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      age,
      email,
      password,
    };
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:3000/user/register",
        user,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      setIsLoading(false);
      navigate("/signin", { replace: true });
    } catch (error) {
      if (error.response.status === 409) {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Already Exists",
          footer: '<a href="">Try using different Email</a>',
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
            First Name
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Email"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Last Name
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
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
            Age
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Age"
            onChange={(e) => setAge(e.target.value)}
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
          <Link className="text-white text-decoration-none">
            {isLoading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Register"
            )}
          </Link>
        </button>
        {/* <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div> */}
      </form>
    </div>
  );
};

export default Register;
