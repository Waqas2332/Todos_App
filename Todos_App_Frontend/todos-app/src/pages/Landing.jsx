import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import "./Landing.css";
const Landing = () => {
  return (
    <div>
      <Nav />
      <main className="main w-100 d-flex justify-content-center flex-column align-items-center">
        <div className="mb-3">
          <h2 className="text-white">Welcome To Todos App</h2>
        </div>
        <div>
          <button className="btn btn-primary">
            <Link to="/register" className="text-white text-decoration-none">
              Register
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Landing;
