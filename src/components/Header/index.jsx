import "./styles.css";
import simpsonImage from "../../assets/simpson.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link to= "/">
        <img src={simpsonImage} alt="Los Simpson" />
      </Link>
    </div>
  );
};

export default Header;
