import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getStockById } from "../../../api/StockApi";
import { CircularProgress } from "@mui/material";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStockById(id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <CircularProgress color="inherit" />
      ) : (
        <ItemDetail {...item} />
      )}
    </>
  );
};
