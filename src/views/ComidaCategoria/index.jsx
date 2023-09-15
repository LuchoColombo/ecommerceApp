import { useState, useEffect } from "react";

import ComidaCard from "../../components/ComidaCard";
import "./styles.css";

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from "firebase/firestore";

import { useParams } from "react-router-dom";
import { db } from "../../firebase";

export const ComidaCategoria = () => {
  const [comidasData, setComidasData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { categoria } = useParams();

  console.log(isLoading);

  useEffect(() => {
    const getComidas = async () => {
      const q = query(
        collection(db, "comidas"),
        where("categoria", "==", categoria)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      console.log("DATA:", querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log("DATA:", doc.data(), "ID:", doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setComidasData(docs);
    };
    getComidas();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [categoria]);

  return (
    <div className="CategoriaContainer">
      {comidasData.map(({ categoria, img, plato, precio, id }) => {
        return (
          <div key={id}>
            <ComidaCard
              categoria={categoria}
              img={img}
              plato={plato}
              precio={precio}
              key={id}
            >
              <button></button>
            </ComidaCard>
          </div>
        );
      })}
    </div>
  );
};
