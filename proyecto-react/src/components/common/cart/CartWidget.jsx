import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {
  return (
    <div>
      <span>10</span>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
};

export default CartWidget;
