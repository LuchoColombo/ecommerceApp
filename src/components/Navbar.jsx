import { AppBar, Container, Toolbar } from "@mui/material";

import { Link } from "react-router-dom";
import "./Navbar.css";

const styles = {
  linkButton: {
    textDecoration: "none",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkButtonHover: {
    color: "blue",
  },
  purchaseButton: {
    color: "grey",
    fontSize: 18,
    fontWeight: "bold",
  },
};

export const Navbar = () => {
  return (
    <AppBar position="static" className="Navbar">
      <Container maxWidth="xl" style={{ backgroundColor: "black" }}>
        <Toolbar disableGutters className="NavbarContainer">
          <Link to="/" style={styles.linkButton}>
            Home
          </Link>
          <Link to="/entrada" style={styles.linkButton}>
            Entradas
          </Link>
          <Link to="/principal" style={styles.linkButton}>
            Principal
          </Link>
          <Link to="/postre" style={styles.linkButton}>
            Postres
          </Link>
          <Link to="/bebidas" className="LinkHov" style={styles.linkButton}>
            Bebidas
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
