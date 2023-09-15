import { useState, useEffect } from "react";
import ComidaCard from "../../components/ComidaCard";
import Spinner from "../../components/Spinner";

import "./styles.css";

// FIRBASE - FIRESTORE

import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";

export const ComidaDetalle = () => {
  const [comidaData, setComidaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(comidaData);

  const { id } = useParams();

  useEffect(() => {
    const getComidas = async () => {
      const q = query(collection(db, "comidas"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setComidaData(docs);
    };
    getComidas();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);

  return (
    <div className="DetailContainer">
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        comidaData.map(({ categoria, img, plato, precio, id }) => {
          return (
            <ComidaCard
              categoria={categoria}
              img={img}
              plato={plato}
              precio={precio}
              key={id}
            />
          );
        })
      )}
    </div>
  );
};
