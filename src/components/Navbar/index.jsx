import CartWidget from "./CartWidget";
import "./styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navBut">
        <button>Menu</button>
        <button>Entrada</button>
        <button>Principal</button>
        <button>Bebidas</button>
        <button>Postre</button>
      </div>

      <CartWidget />
    </nav>
  );
}

export default Navbar;
