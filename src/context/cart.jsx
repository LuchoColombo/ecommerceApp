import { useReducer, createContext } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart.js";
import PropTypes from "prop-types";

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  const subtractFromCart = (product) =>
    dispatch({
      type: "SUBTRACT_FROM_CART",
      payload: product,
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return { state, addToCart, removeFromCart, clearCart, subtractFromCart };
}

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart, subtractFromCart } =
    useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
        subtractFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.any,
};
