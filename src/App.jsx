/* import { products as initialProducts } from "./mocks/products.json"; */
import { Products } from "./components/Products.jsx";
import { Header } from "./components/Header.jsx";
import { useFilters } from "./hooks/useFilters.js";
import { Cart } from "./components/Cart.jsx";
import { CartProvider } from "./context/cart.jsx";
import { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./firebase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ComidaDetail } from "./views/ComidaDetail.jsx";

function App() {
  const { filterProducts } = useFilters();

  const [comidasData, setComidasData] = useState([]);

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

  const filteredProducts = filterProducts(comidasData);

  return (
    <Router>
      <CartProvider>
        <Header />
        <Cart />
        <Routes>
          <Route path="/" element={<Products products={filteredProducts} />} />
          <Route path="/details/:id" element={<ComidaDetail />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
