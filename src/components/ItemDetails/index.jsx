import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

const ItemDetails = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://apisimpsons.fly.dev/api/personajes?limit=50"
        );
        const characters = response.data.docs;

        const foundCharacter = characters.find((char) => {
          return char._id === id;
        });

        if (foundCharacter) {
          setCharacter(foundCharacter);
          console.error(foundCharacter);
        } else {
          console.error("Character not found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <div className="card-image">
        <img src={character.Imagen} alt="Imagen de la tarjeta" />
      </div>
      <div className="card-info">
        <h2>{character.Nombre}</h2>
        <p>
          <strong>Genero: </strong>
          {character.Genero}
        </p>
        <p>
          <strong>Estado: </strong>
          {character.Estado}
        </p>
        <p>
          <strong>Ocupacion: </strong>
          {character.Ocupacion}
        </p>
        <h3>Historia</h3>
        <div className="card-info-detail">{character.Historia}</div>
      </div>
    </div>
  );
};

export default ItemDetails;
