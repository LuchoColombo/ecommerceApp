import { AppBar, Container, Toolbar } from "@mui/material";

import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <AppBar position="static" className="Navbar">
      <Container maxWidth="xl" style={{ backgroundColor: "black" }}>
        <Toolbar disableGutters className="NavbarContainer">
          <Link to="/" className="linkButton">
            Home
          </Link>
          <Link to="/entrada" className="linkButton">
            Entradas
          </Link>
          <Link to="/principal" className="linkButton">
            Principal
          </Link>
          <Link to="/postre" className="linkButton">
            Postres
          </Link>
          <Link to="/bebidas" className="linkButton">
            Bebidas
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
