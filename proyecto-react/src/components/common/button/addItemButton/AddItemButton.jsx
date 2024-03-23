import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const AddItemButton = ({ counter, onAdd }) => {
  return (
    <>
      <Button
        onClick={() => onAdd(counter)}
        variant="outlined"
        style={{ fontSize: "10px", borderRadius: "15px" }}
        sx={{ height: 35 }}
        color="secondary"
        endIcon={<AddShoppingCartIcon />}
      >
        Agregar al carrito
      </Button>
    </>
  );
};
