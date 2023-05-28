import { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [image, setImage] = useState(null);
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
      .then((response) => console.log(response.data));
  };
  return (
    <div>
      <div>
        <h2>Upload Image</h2>
        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default FileUpload;
