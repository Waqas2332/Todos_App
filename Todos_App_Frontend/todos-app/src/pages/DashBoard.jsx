import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import FileUpload from "../components/FileUpload";
import { setUser } from "../store/user-slice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const getUser = () => {
    axios
      .get("http://localhost:3000/user/userdata", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch(setUser(response.data));
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
          <img
            src={
              user.imageUrl
                ? user.imageUrl
                : "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"
            }
            alt=""
            height="250px"
            width="250px"
            className="mb-5"
            style={{
              borderRadius: "50%",
            }}
          />
          <h2>First Name</h2>
          <p className="fs-5">{user.firstName}</p>
          <h2>Last Name</h2>
          <p className="fs-5">{user.lastName}</p>
          <h2>Age</h2>
          <p className="fs-5">{user.age}</p>
          <h2>Email</h2>
          <p className="fs-5">{user.email}</p>
        </div>
      </main>
      <div>
        <div className="container">
          <button className="mb-5 btn btn-primary">
            <Link
              className="text-decoration-none text-white"
              to="/edit-profile"
            >
              Edit Profile
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
