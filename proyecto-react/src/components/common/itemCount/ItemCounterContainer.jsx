import { useState } from "react";
import { ItemCount } from "./ItemCount";
import Swal from "sweetalert2";

// import { Alert, Stack } from "@mui/material";

export const ItemCounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  const add = () => {
    // counter < stock ? setCounter(counter + 1) : counter;

    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      {
        // <Stack>
        // <Alert severity="error">ERROR.</Alert>;
        // </Stack>;
        <></>;
        Swal.fire({
          title: "Sin stock",
          text: "No puedes agregar más unidades al carrito",
          icon: "warning",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1500,
        });
      }
    }
  };

  const subtract = () => {
    if (counter == 1) {
      return counter;
    } else {
      setCounter(counter - 1);
    }
  };

  // useEffect(() => {
  //   add();
  //   subtract();
  // }, []);

  return (
    <ItemCount
      stock={stock}
      subtract={subtract}
      counter={counter}
      add={add}
      onAdd={onAdd}
    />
  );
};
