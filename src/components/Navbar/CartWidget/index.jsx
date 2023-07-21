import Cart from "../../../assets/icons/cart.png";
import "./styles.css";

function CartWidget() {
  return (
    <div className="cart">
      <img src={Cart} alt="cart" className="cart-icon" />
      <p>0</p>
    </div>
  );
}

export default CartWidget;
