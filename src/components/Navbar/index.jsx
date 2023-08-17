import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <nav className="navbar-container">
      <ul className="nav-ul">
        <Link className="li" to="/">Menu</Link>
        <Link className="li" to="/hombres">Hombres</Link>
        <Link className="li" to="/mujeres">Mujeres</Link>
        <Link className="li" to="/nohumano">No Humano</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
