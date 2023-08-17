import { useState, useEffect } from "react";
import axios from "axios";
import "../components/ItemListContainer/styles.css";
import { Link } from "react-router-dom";
import Item from "../components/Item";

const Hombres = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchItemListContainer = async () => {
      try {
        const response = await axios.get(
          "https://apisimpsons.fly.dev/api/personajes?limit=50"
        );
        setCharacters(response.data.docs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItemListContainer();
  }, []);

  const maleCharacters = characters.filter(
    ({ Genero }) => Genero === "Masculino"
  );

  return (
    <div className="list-container">
      {maleCharacters.map(({ _id, Imagen, Nombre, Genero }) => (
        <div key={_id}>
          <Link to={`/details/${_id}`}>
            <Item image={Imagen} name={Nombre} genero={Genero} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Hombres;
