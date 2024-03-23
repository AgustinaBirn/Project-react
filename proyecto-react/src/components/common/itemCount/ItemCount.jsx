import { Button } from "@mui/material";
// import { AddItemButton } from "../button/addItemButton/AddItemButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const ItemCount = ({ stock, subtract, counter, add, onAdd }) => {
  return (
    <>
      <div>
        <Button onClick={subtract} disabled={counter === 1 ? true : false}>
          -
        </Button>
        <strong>{counter}</strong>
        <Button onClick={add}>+</Button>
      </div>
      <div>
        <Button
          onClick={() => {
            onAdd(counter);
            console.log(stock);
          }}
          disabled={stock === 0 ? true : false}
          variant="outlined"
          style={{ fontSize: "10px", borderRadius: "15px" }}
          sx={{ height: 35 }}
          color="secondary"
          endIcon={<AddShoppingCartIcon />}
        >
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};
