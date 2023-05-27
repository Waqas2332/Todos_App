import Nav from "../components/Nav";
import Todos from "./Todos/Todos";

const Welcome = () => {
  return (
    <div>
      <Nav />
      <main className="main d-flex justify-content-center align-items-center w-100">
        <div></div>
        <div>
          <Todos />
        </div>
      </main>
    </div>
  );
};

export default Welcome;
