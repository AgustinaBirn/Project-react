import { ProductCard } from "../../common/Card/ProductCard";
import { Greeting } from "./Greeting/Greeting";

const ItemList = () => {
  return (
    <div>
      <Greeting name={"Juan"} />
      <ProductCard
        title="Remera"
        description="Tela: algodón"
        size="L"
        price="$5.000"
      />
      <ProductCard
        title="Pantalon"
        description="Tela: seda"
        size="XL"
        price="$15.000"
      />
      <ProductCard
        title="Vestido"
        description="Tela: algodón"
        size="L"
        price="$11.000"
      />
      <ProductCard
        title="Short"
        description="Tela: lino"
        size="L"
        price="$9.000"
      />
    </div>
  );
};

export default ItemList;
