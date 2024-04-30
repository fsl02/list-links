
import ListLinks from "./components/ListLinks";
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Link to="/login">Login</Link>
      <ListLinks />
    </>
  )
}

export default App
