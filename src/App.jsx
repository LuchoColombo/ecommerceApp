import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Menu from "./pages/Menu";
import ItemDetails from "./components/ItemDetails";
import Hombres from "./pages/Hombres";
import Mujeres from "./pages/Mujeres";
import NoHumano from "./pages/NoHumano";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/hombres" element={<Hombres />} />
          <Route path="/mujeres" element={<Mujeres />} />
          <Route path="/nohumano" element={<NoHumano />} />
          <Route path="/details/:id" element={<ItemDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
