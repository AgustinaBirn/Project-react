import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
// import { DeleteButtonContainer } from "../button/deleteButtons/DeleteButtonContainer";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

export const Cart = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();
  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Seguro que quieres vaciar el carrito?",
      text: "No podrás revertirlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Si, eliminar",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Carrito vaciado!",
          text: "Tus productos han sido eliminados.",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        clearCart();
      }
    });
  };

  const deleteProductWithAlert = (id) => {
    Swal.fire({
      title: "Seguro que quieres eliminar el producto?",
      text: "No podrás revertirlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Si, eliminar",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Producto eliminado!",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        removeById(id);
      }
    });
  };

  return (
    <>
      <div>ESTE ES EL CARRITO</div>
      <div>
        {cart.map(({ name, id }) => (
          <div key={id}>
            <h2>{name}</h2>
            <Button
              // onClick={() => removeById(id)}
              onClick={() => deleteProductWithAlert(id)}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Eliminar producto
            </Button>
          </div>
        ))}
        <h2>Total : ${total}</h2>
      </div>
      <button onClick={clearCartWithAlert}>Borrar carrito</button>
      <Link to={"/checkout"}>
        <button>Terminar compra</button>
      </Link>
    </>
  );
};
