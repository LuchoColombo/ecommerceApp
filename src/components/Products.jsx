import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import PropTypes from "prop-types";
import { CardWidget } from "./CardWidget";
import { Link } from "react-router-dom";

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product);

          return (
            <CardWidget key={product.id} product={product}>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? "red" : "#09f" }}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
              <Link to={`/details/${product.id}`}>
                <button>View More</button>
              </Link>
            </CardWidget>
          );
        })}
      </ul>
    </main>
  );
}

Products.propTypes = {
  products: PropTypes.array,
};
