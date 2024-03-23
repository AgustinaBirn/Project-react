import { Badge, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
// import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  let total = getTotalItems();

  return (
    <div>
      <IconButton color="primary" aria-label="cart">
        <Badge
          style={{ color: "#ce93d8" }}
          badgeContent={total}
          showZero
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </div>
  );
};

export default CartWidget;
