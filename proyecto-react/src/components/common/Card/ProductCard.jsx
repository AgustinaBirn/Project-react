import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const ProductCard = ({ id, img, name }) => {
  return (
    <div style={{ padding: "25px", maxWidth: "400px" }}>
      <div key={id}>
        <Card style={{ height: "500px" }}>
          <CardActionArea href={`/item/${id}`}>
            <CardMedia
              component="img"
              height="350"
              image={img}
              alt="Pantalon"
            />
            <CardContent>
              <Typography
                style={{ textAlign: "center", fontSize: "20px" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center" }}>
            <Button variant="outlined" href={`/item/${id}`}>
              Detalle
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
