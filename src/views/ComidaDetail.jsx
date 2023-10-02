import { useState, useEffect } from "react";
import { CardWidget } from "../components/CardWidget";

import { useParams } from "react-router-dom";
import { AddToCartIcon, RemoveFromCartIcon } from "../components/Icons";
import { useCart } from "../hooks/useCart";
import PropTypes from "prop-types";
import Spinner from "../components/Spinner";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import "./ComidaDetail.css";

export const ComidaDetail = () => {
  const [comidasData, setComidasData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  console.log(comidasData);

  const { id } = useParams();

  useEffect(() => {
    const getComidas = async () => {
      const q = query(collection(db, "comidas"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setComidasData(docs);
    };
    getComidas();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);

  return (
    <div className="comidas">
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        comidasData.map((product) => {
          const isProductInCart = checkProductInCart(product);

          return (
            <CardWidget key={product.id} product={product}>
              <div>{product.descripcion}</div>
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
            </CardWidget>
          );
        })
      )}
    </div>
  );
};

ComidaDetail.propTypes = {
  products: PropTypes.array,
};
