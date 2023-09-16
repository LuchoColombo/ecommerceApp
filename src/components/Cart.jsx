import "./Cart.css";

import { useId, useState } from "react";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import PropTypes from "prop-types";

function CartItem({
  img,
  precio,
  plato,
  cantidad,
  addToCart,
  subtractFromCart,
}) {
  return (
    <li>
      <img src={img} alt={plato} />
      <div>
        <strong>{plato}</strong> - ${precio * cantidad}
      </div>

      <footer>
        <small>Cantidad: {cantidad}</small>
        <button onClick={addToCart}>+</button>
        <button onClick={subtractFromCart}>-</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart, subtractFromCart } = useCart();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const totalAmount = cart.reduce((total, product) => {
    return total + product.precio * product.cantidad;
  }, 0);

  const handleBuyClick = () => {
    if (nombre && apellido) {
      alert("Compra realizada");
      clearCart();
      setNombre("");
      setApellido("");
    } else {
      alert("Por favor ingrese nombre y apellido");
    }
  };

  return (
    <>
      <label
        className="cart-button"
        style={{ display: "flex", position: "fixed" }}
        htmlFor={cartCheckboxId}
      >
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <button onClick={clearCart} style={{ backgroundColor: "red" }}>
          <ClearCartIcon />
        </button>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              subtractFromCart={() => subtractFromCart(product)}
              {...product}
            />
          ))}
        </ul>

        <div className="cart-total">
          <strong>TOTAL A PAGAR:</strong> ${totalAmount}
        </div>
        <form>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>
        </form>

        <button
          onClick={handleBuyClick}
          style={{
            marginBottom: "50px",
            marginTop: "25px",
            backgroundColor: "green",
          }}
        >
          COMPRAR
        </button>
      </aside>
    </>
  );
}

CartItem.propTypes = {
  img: PropTypes.string,
  precio: PropTypes.number,
  plato: PropTypes.string,
  cantidad: PropTypes.number,
  addToCart: PropTypes.func,
  subtractFromCart: PropTypes.func,
};
