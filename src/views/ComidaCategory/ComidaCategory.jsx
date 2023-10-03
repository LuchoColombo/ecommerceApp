import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase";
import { CardWidget } from "../../components/CardWidget";
import { useCart } from "../../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "../../components/Icons";
import Spinner from "../../components/Spinner";

export const ComidaCategory = () => {
  const [comidasData, setComidasData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart, removeFromCart, cart } = useCart();

  const { categoria } = useParams();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  useEffect(() => {
    const getComidas = async () => {
      const q = query(
        collection(db, "comidas"),
        where("categoria", "==", categoria)
      );
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
  }, [categoria]);

  return (
    <main className="products">
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <ul>
          {comidasData.map((product) => {
            const isProductInCart = checkProductInCart(product);
            return (
              <CardWidget key={product.id} product={product}>
                <div>
                  <button
                    style={{
                      backgroundColor: isProductInCart ? "red" : "#09f",
                    }}
                    onClick={() => {
                      isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product);
                    }}
                  >
                    {isProductInCart ? (
                      <RemoveFromCartIcon />
                    ) : (
                      <AddToCartIcon />
                    )}
                  </button>
                </div>
                <Link to={`/details/${product.id}`}>
                  <button>View More</button>
                </Link>
              </CardWidget>
            );
          })}
        </ul>
      )}
    </main>
  );
};
