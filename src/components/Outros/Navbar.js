import { Link } from "react-router-dom";

function Navbar() {
  return <nav>
    <Link to="/"> Home </Link> <br/>
    <Link to="/contato"> Contato</Link>
  </nav>;
}

export default Navbar;
