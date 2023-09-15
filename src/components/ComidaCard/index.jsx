import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";

const ComidaCard = ({ img, plato, precio, categoria, children }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {plato}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {precio} | {categoria}
          </Typography>
          {children}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ComidaCard;

ComidaCard.propTypes = {
  img: PropTypes.string,
  plato: PropTypes.string,
  precio: PropTypes.number,
  categoria: PropTypes.string,
  children: PropTypes.any,
};
