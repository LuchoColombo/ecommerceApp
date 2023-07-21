import { useState } from "react";
import "./styles.css";

function ItemListContainer({ props }) {
  const [saludo, setSaludo] = useState(props);
  const [borrado, setBorrado] = useState(false);

  function changeGreeting() {
    setSaludo("Aprobameeee");
  }

  function backGreeting() {
    setSaludo("Por favor");
  }

  function saludoTutor() {
    setSaludo("Hola Tutor");
  }

  function borrarComp() {
    setBorrado(true);
  }

  if (borrado) {
    return null;
  }

  return (
    <div className="item-list-container">
      <Content
        saludo={saludo}
        changeGreeting={changeGreeting}
        backGreeting={backGreeting}
        saludoTutor={saludoTutor}
      />
      <button onClick={borrarComp} style={{ backgroundColor: 'red', color: 'white' }}>Borrar Componente</button>
    </div>
  );
}

function Content({
  saludo,
  changeGreeting,
  backGreeting,
  saludoTutor,
}) {
  return (
    <>
      <p>{saludo}</p>
      <button onClick={changeGreeting}>Press me</button>
      <button onClick={backGreeting}>Press me</button>
      <button onClick={saludoTutor}>Press me</button>
    </>
  );
}

export default ItemListContainer;
