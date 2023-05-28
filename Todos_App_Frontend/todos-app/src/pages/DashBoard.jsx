import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import FileUpload from "../components/FileUpload";

const DashBoard = () => {
  const [user, setUser] = useState({});
  const getUser = () => {
    axios
      .get("http://localhost:3000/user/userdata", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <Nav />
      <main className="w-100  h-75 d-flex mt-5 justify-content-center flex-column ">
        <div className="container mt-5">
          <h2>Name</h2>
          <p className="fs-3">{user.firstName}</p>
          <p>{user.email}</p>
          <img src={user.imageUrl} alt="" />
        </div>
      </main>
      <div>
        <FileUpload />
      </div>
    </div>
  );
};

export default DashBoard;
