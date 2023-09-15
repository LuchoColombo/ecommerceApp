import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3y5fVf3Ua8OnZHof6x_zjCu50khFFXqbxw&usqp=CAU"
          alt="Menu comidas"
        />
      </Link>
    </div>
  );
};

export default Header;
