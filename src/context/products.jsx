import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [comidasData, setComidasData] = useState([]);

  console.log("HOLAAAAAAAAAAAAA", comidasData);

  useEffect(() => {
    const getComidas = async () => {
      let q;

      q = query(collection(db, "comidas"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setComidasData(docs);
    };

    getComidas();
  }, []);

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
