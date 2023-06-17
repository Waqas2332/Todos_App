import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import FileUpload from "../components/FileUpload";
import axios from "axios";

const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      age,
    };
    axios
      .put("http://localhost:3000/user/edit-user", newUser, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data);
        navigate("/dashboard");
      });
  };
  return (
    <div>
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
            placeholder="Enter Your First Name"
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
        <button className="btn btn-primary">
          <Link className="text-white text-decoration-none">
            {isLoading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Edit Profile"
            )}
          </Link>
        </button>
        <strong className="d-block mt-3 fs-1">OR</strong>

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
      <div>
        <FileUpload />
      </div>
    </div>
  );
};

export default EditProfile;
