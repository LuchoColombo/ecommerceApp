import { useState, useEffect } from "react";
import axios from "axios";
import "../components/ItemListContainer/styles.css";
import { Link } from "react-router-dom";
import Item from "../components/Item";

const NoHumano = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchItemListContainer = async () => {
      try {
        const response = await axios.get(
          "https://apisimpsons.fly.dev/api/personajes?limit=600"
        );
        setCharacters(response.data.docs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItemListContainer();
  }, []);

  const noHumanCharacters = characters.filter(
    ({ Genero }) => Genero !== "Masculino" && Genero !== "Femenino"
  );

  return (
    <div className="list-container">
      {noHumanCharacters.map(({ _id, Imagen, Nombre, Genero }) => (
        <div key={_id}>
          <Link to={`/details/${_id}`}>
            <Item image={Imagen} name={Nombre} genero={Genero} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NoHumano;
