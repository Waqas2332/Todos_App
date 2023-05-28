import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const auth = useSelector((state) => state.auth.isAuth);
  const GuestLinks = () => {
    return (
      <div>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        </li>
      </div>
    );
  };
  const AuthLinks = () => {
    return (
      <div>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/welcome">
            All Todo
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add-todo">
            Add Todos
          </Link>
        </li>
      </div>
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Todos
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-5 ms-auto mb-2 mb-lg-0">
              {!auth ? <GuestLinks /> : <AuthLinks />}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
