import { useState } from "react";

import "./styles.css";

// Firebase

import { TextField, Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const styles = {
  containerShop: {
    textAlign: "center",
    padding: 20,
  },
};

const initialState = {
  plato: "",
  precio: "",
  categoria: "",
  img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-coder-5862d.appspot.com/o/napo-con-frita-1-300x300.jpg?alt=media&token=24ab72fd-8c08-44bc-8eae-b5531fb242c5",
};

export const CargarComidas = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const { categoria, img, plato, precio } = values;

    const precioNumero = parseFloat(precio);

    const docRef = await addDoc(collection(db, "comidas"), {
      categoria,
      img,
      plato,
      precio: precioNumero,
    });
    // console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <form
        className="FormContainer"
        style={styles.containerShop}
        onSubmit={onSubmit}
      >
        <TextField
          placeholder="Plato"
          style={{ margin: 10, width: 400 }}
          name="plato"
          value={values.plato}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Precio"
          style={{ margin: 10, width: 400 }}
          name="precio"
          value={values.precio}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Categoria"
          style={{ margin: 10, width: 400 }}
          name="categoria"
          value={values.categoria}
          onChange={handleOnChange}
        />
        <Button variant="contained" className="btnASendAction" type="submit">
          Send
        </Button>
      </form>

      {purchaseID}
    </div>
  );
};
