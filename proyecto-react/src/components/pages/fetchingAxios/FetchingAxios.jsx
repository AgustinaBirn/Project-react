import { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../../../api/axiosInstance";

export const FetchingAxios = () => {
  const [product, letProduct] = useState([]);

  useEffect(() => {
    const getProduct = axiosInstance.get("/stock");
    getProduct
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  const createProduct = (element) => {
    axiosInstance.post("stock", element);
  };

  return <div>FetchingAxios</div>;
};
