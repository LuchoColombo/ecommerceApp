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
  removeFromCart,
}) {
  return (
    <li>
      <img src={img} alt={plato} />
      <div>
        <strong>{plato}</strong> - ${precio * cantidad}
      </div>

      <footer>
        <small>Cantidad: {cantidad}</small>
        <button onClick={subtractFromCart}>-</button>
        <button onClick={addToCart}>+</button>
      </footer>
      <button
        onClick={removeFromCart}
        style={{ backgroundColor: "red", marginTop: "10px" }}
      >
        Eliminar
      </button>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart, subtractFromCart, removeFromCart } =
    useCart();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const totalAmount = cart.reduce((total, product) => {
    return total + product.precio * product.cantidad;
  }, 0);

  const totalCarrito = cart.reduce((total, product) => {
    return total + product.cantidad;
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "red",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              position: "absolute",
              top: "17px",
              right: "17px",
            }}
          >
            {totalCarrito}
          </div>
          <CartIcon />
        </div>
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
              removeFromCart={() => removeFromCart(product)}
              subtractFromCart={() => subtractFromCart(product)}
              {...product}
            />
          ))}
        </ul>
        <div className="cart-total">
          <strong>TOTAL A PAGAR:</strong> ${totalAmount}
        </div>
        {totalAmount == 0 ? null : (
          <>
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
          </>
        )}
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
  removeFromCart: PropTypes.func,
};
