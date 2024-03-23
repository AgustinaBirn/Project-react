import { Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { getStock } from "./api/StockApi";
import { useEffect, useState } from "react";

export const AgregarDocs = () => {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    getStock().then((res) => {
      setStock(res);
    });
  }, []);

  console.log(stock);
  const fill = () => {
    let productCollection = collection(db, "stock");
    stock.forEach((product) => {
      addDoc(productCollection, product);
    });
  };
  return <Button onClick={fill}>Agregar documentos</Button>;
};
