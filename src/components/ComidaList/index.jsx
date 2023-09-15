import { useState, useContext } from "react";

import "./styles.css";

import { Link } from "react-router-dom";

// FIRBASE - FIRESTORE
import ComidaCard from "../ComidaCard";
import Spinner from "../Spinner";
import { dataContext } from "../../context/DataContext";

export const ComidaList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { comidasData } = useContext(dataContext);

  console.log("DATAAAAAAAAAAAAAAAA", comidasData);

  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div className="ComidasListContainer">
          {comidasData.map(({ img, plato, precio, categoria, id }) => {
            return (
              <Link
                to={`/detalle/${id}`}
                key={id}
                style={{ textDecoration: "none", width: "fit-content" }}
              >
                <ComidaCard
                  img={img}
                  plato={plato}
                  precio={precio}
                  categoria={categoria}
                />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
