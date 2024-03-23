import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ItemCounterContainer } from "../../common/itemCount/ItemCounterContainer";
// import { DeleteButtonContainer } from "../../common/button/deleteButtons/DeleteButtonContainer";

export const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "30px",
      }}
    >
      <Card sx={{ maxWidth: 400 }} style={{ borderRadius: "20px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={item.img}
            alt="Pantalon"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ textAlign: "center" }}
            >
              {item.name}
            </Typography>
            <Typography
              sx={{ height: 70 }}
              variant="body2"
              color="text.secondary"
              style={{ textAlign: "center" }}
            >
              Talle: {item.tall}
              {<br />}
              {<br />}
              Precio: ${item.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div>
          {initial && (
            <h4>
              Agregaste {initial} {item.name} al carrito
            </h4>
          )}
        </div>
        <CardActions style={{ justifyContent: "space-around" }}>
          {/* <DeleteButtonContainer /> */}
          <ItemCounterContainer
            stock={item.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </CardActions>
      </Card>
    </div>
  );
};
