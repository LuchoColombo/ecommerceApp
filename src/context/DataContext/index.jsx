import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { collection, query, getDocs, where } from "firebase/firestore"; // Importa tus dependencias de Firebase aquí
import { db } from "../../firebase";
import { useParams } from "react-router-dom";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [comidasData, setComidasData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { categoria } = useParams();

  console.log("HOLAAAAAAAAAAAAA", comidasData);

  useEffect(() => {
    const getComidas = async () => {
      let q;

      if (categoria) {
        q = query(
          collection(db, "comidas"),
          where("categoria", "==", categoria)
        );
      } else {
        q = query(collection(db, "comidas"));
      }

      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setComidasData(docs);
      setIsLoading(false);
    };

    getComidas();
  }, [categoria]);

  return (
    <dataContext.Provider value={{ comidasData }}>
      {children}
    </dataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.any,
};

export default DataProvider;
