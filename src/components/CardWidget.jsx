import PropTypes from "prop-types";
import "./CardWidget.css";

export const CardWidget = ({ product, children }) => {
  return (
    <li className="card">
      <img src={product.img} alt={product.plato} />
      <div>
        <strong>{product.plato}</strong> - ${product.precio}
      </div>
      {children}
    </li>
  );
};

CardWidget.propTypes = {
  product: PropTypes.object,
  children: PropTypes.any,
};
