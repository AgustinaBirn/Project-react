import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStock } from "../api/StockApi";

export const useFetch = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getStock().then((resp) => {
      if (category) {
        const producFilter = resp.filter(
          (product) => product.category === category
        );
        setProducts(producFilter);
      } else {
        setProducts(resp);
      }
      setIsLoading(false);
    });
  }, [category]);

  return {
    product: products,
    isLoading: isLoading,
  };
};
