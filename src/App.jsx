import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Menu from "./views/Home";
import { ComidaCategoria } from "./views/ComidaCategoria";
import { CargarComidas } from "./views/CargarComidas";
import { ComidaDetalle } from "./views/ComidaDetalle";
import Error from "./views/Error";
import CarritoContent from "./components/CarritoContent";
import  DataProvider  from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/:categoria" element={<ComidaCategoria />} />
            <Route path="/detalle/:id" element={<ComidaDetalle />} />
            <Route path="/cargar" element={<CargarComidas />} />
            <Route path="/carrito" element={<CarritoContent />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
