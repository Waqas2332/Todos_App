import { useState } from "react";
import Nav from "../components/Nav";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

      alert(response.data);
      navigate("/welcome", { replace: true });
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
          <Link className="text-white text-decoration-none">Register</Link>
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
