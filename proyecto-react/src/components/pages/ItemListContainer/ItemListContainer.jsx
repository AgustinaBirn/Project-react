import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStock } from "../../../api/StockApi";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getStock().then((resp) => {
      if (category) {
        const productFilter = resp.filter(
          (product) => product.category === category
        );
        setProducts(productFilter);
      } else {
        setProducts(resp);
      }
      setIsLoading(false);
    });
  }, [category]);

  return <ItemList product={products} isLoading={isLoading} />;
};
