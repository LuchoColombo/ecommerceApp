import PropTypes from "prop-types";

export const CardWidget = ({ product, children }) => {
  return (
    <li>
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
