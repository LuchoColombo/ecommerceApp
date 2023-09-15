import "./Cart.css";

import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import PropTypes from "prop-types";

function CartItem({ img, precio, plato, cantidad, addToCart }) {
  return (
    <li>
      <img src={img} alt={plato} />
      <div>
        <strong>{plato}</strong> - ${precio * cantidad}
      </div>

      <footer>
        <small>Cantidad: {cantidad}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
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
};
