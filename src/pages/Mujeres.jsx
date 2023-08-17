import { useState, useEffect } from "react";
import axios from "axios";
import "../components/ItemListContainer/styles.css";
import { Link } from "react-router-dom";
import Item from "../components/Item";

const Mujeres = () => {
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

  const femaleCharacters = characters.filter(
    ({ Genero }) => Genero === "Femenino"
  );

  return (
    <div className="list-container">
      {femaleCharacters.map(({ _id, Imagen, Nombre, Genero }) => (
        <div key={_id}>
          <Link to={`/details/${_id}`}>
            <Item image={Imagen} name={Nombre} genero={Genero} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Mujeres;
