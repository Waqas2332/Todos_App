import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FileUpload = (props) => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    axios
      .post("http://localhost:3000/user/uploadimage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        navigate("/dashboard");
        console.log(response.data);
      });
  };
  return (
    <div className="ms-5 mt-3">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            className="d-block"
            onChange={handleImageUpload}
          />
          <button type="submit" className="btn btn-primary mt-3">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default FileUpload;
