import { ProductCard } from "../../common/Card/ProductCard";

import { GreetingContainer } from "./Greeting/GreetingContainer";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1>{greeting}</h1>
      <GreetingContainer />
      <ProductCard
        title="Remera"
        description="Tela: algodón"
        size="L"
        price="$5.000"
        stock={10}
      />
      <ProductCard
        title="Pantalon"
        description="Tela: seda"
        size="XL"
        price="$15.000"
        stock={3}
      />
      <ProductCard
        title="Vestido"
        description="Tela: algodón"
        size="L"
        price="$11.000"
        stock={5}
      />
      <ProductCard
        title="Short"
        description="Tela: lino"
        size="L"
        price="$9.000"
        stock={13}
      />
    </div>
  );
};

export default ItemListContainer;
