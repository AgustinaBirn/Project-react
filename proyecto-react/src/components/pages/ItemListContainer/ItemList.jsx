import { CircularProgress } from "@mui/material";
import { ProductCard } from "../../common/Card/ProductCard";

export const ItemList = ({ product, isloading }) => {
  return (
    <>
      <h3
        style={{ display: "flex", justifyContent: "center", padding: "30px" }}
      >
        Productos
      </h3>
      <div
        style={{
          display: "flex",
          flexGrow: "Grow",
          justifyContent: "center",
        }}
        className="row"
      >
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

// import { ProductCard } from "../../common/Card/ProductCard";
// import { Greeting } from "./Greeting/Greeting";
// import { GreetingContainer } from "./Greeting/GreetingContainer";

// import { ProductCard } from "../../common/Card/ProductCard";

// const ItemList = ({ items }) => {
//   console.log(items);
//   return (
//     <div>
//       {items.map((item) => {
//         return (
//           <ProductCard
//             key={item.id}
//             img={item.img}
//             title={item.title}
//             description={item.description}
//             price={item.price}
//             stock={item.stock}
//           />
//         );
//       })}
//     </div>

//     // <div>
//     //   <h1>{Greeting}</h1>
//     //   <GreetingContainer />
//     //   <ProductCard
//     //     title="Remera"
//     //     description="Tela: algodón"
//     //     size="L"
//     //     price="$5.000"
//     //     stock={10}
//     //   />
//     //   <ProductCard
//     //     title="Pantalon"
//     //     description="Tela: seda"
//     //     size="XL"
//     //     price="$15.000"
//     //     stock={3}
//     //   />
//     //   <ProductCard
//     //     title="Vestido"
//     //     description="Tela: algodón"
//     //     size="L"
//     //     price="$11.000"
//     //     stock={5}
//     //   />
//     //   <ProductCard
//     //     title="Short"
//     //     description="Tela: lino"
//     //     size="L"
//     //     price="$9.000"
//     //     stock={13}
//     //   />
//     // </div>
//   );
// };

// export default ItemList;
