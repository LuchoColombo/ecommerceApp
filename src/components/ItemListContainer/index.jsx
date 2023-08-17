import { useState, useEffect } from "react";
import axios from "axios";
import Item from "../Item";
import "./styles.css";
import { Link } from "react-router-dom";

const ItemListContainer = () => {
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

  return (
    <div className="list-container">
      {characters.map(({ _id, Imagen, Nombre, Genero }) => (
        <div key={_id}>
          <Link to={`/details/${_id}`}>
            <Item image={Imagen} name={Nombre} genero={Genero} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
