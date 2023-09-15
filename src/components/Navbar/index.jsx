import { Link } from "react-router-dom";
import "./styles.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
/* import { dataContext } from "../../context/DataContext";
import { useContext } from "react"; */

function Navbar() {
  /* const { comidasData } = useContext(dataContext); */
  return (
    <nav className="navbar-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
          Menu
        </Link>
        <Link className="li" to="/entrada">
          Entrada
        </Link>
        <Link className="li" to="/principal">
          Principal
        </Link>
        <Link className="li" to="/postre">
          Postre
        </Link>
        <Link className="li" to="/bebidas">
          Bebidas
        </Link>
        <Link className="li" to="/cargar">
          Cargar plato
        </Link>
        <Link to="/carrito" className="li">
          <div style={{ display: "flex", alignitems: "center" }}>
            <ShoppingCartIcon />
          </div>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
