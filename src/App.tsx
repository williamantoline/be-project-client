import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./router";

function App() {
  return (
    <>
      <Router />
      <ToastContainer autoClose={500} />
    </>
  );
}

export default App;
