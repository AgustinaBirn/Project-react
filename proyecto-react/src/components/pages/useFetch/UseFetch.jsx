import { useFetch } from "../../../hooks/useFetch";
import { CircularProgress } from "@mui/material";
import { ProductCard } from "../../common/Card/ProductCard";

export const UseFetch = () => {
  const { product, isloading } = useFetch("http://localhost:3000/stock");
  console.log({ product });

  return (
    <>
      <h3>Productos</h3>
      <div>
        {isloading ? (
          <CircularProgress color="inherit" />
        ) : (
          product &&
          product.map(({ id, name, tall, units, img }) => (
            <ProductCard
              key={id}
              name={name}
              tall={tall}
              units={units}
              img={img}
              id={id}
            />
          ))
        )}
        <div>
          <button>Atrás</button>
          <strong>Pagina 1</strong>
          <button>Siguiente</button>
        </div>
      </div>
    </>
  );
};

// <img src="" alt="" />
// <p>Producto: {name}</p>
// <p>Talle: {tall}</p>
// <p>Unidades; {units}</p>
// <DeleteButtonContainer />
// <Button variant="outlined" href="#outlined-buttons">
//   Detalle
// </Button>
