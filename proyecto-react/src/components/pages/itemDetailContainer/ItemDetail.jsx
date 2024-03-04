import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Counter } from "../../common/itemCount/ItemCounterContainer";
import { DeleteButtonContainer } from "../../common/button/deleteButtons/DeleteButtonContainer";

export const ItemDetail = ({ name, img, price, units, tall, stock }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia component="img" height="400" image={img} alt="Pantalon" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography
              sx={{ height: 70 }}
              variant="body2"
              color="text.secondary"
            >
              Talle: {tall}
              {<br />}
              {<br />}
              Unidades: {units}
              {<br />}
              {<br />}
              Precio: {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <DeleteButtonContainer />
          <Counter stock={stock} />
        </CardActions>
      </Card>
    </div>
  );
};
