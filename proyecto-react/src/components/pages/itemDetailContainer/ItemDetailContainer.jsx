import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
// import { getStockById } from "../../../api/StockApi";
// import { CircularProgress } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import { CardSkeleton } from "../../common/CardSkeleton";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const initial = getTotalQuantityById(id);

  const navigate = useNavigate();

  useEffect(() => {
    // setIsLoading(true);
    // getStockById(id).then((resp) => {
    //   setItem(resp);
    //   setIsLoading(false);
    // });

    let stockCollection = collection(db, "stock");
    let refDoc = doc(stockCollection, id);
    getDoc(refDoc)
      .then((res) => {
        setItem({ ...res.data(), id: res.id });
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const onAdd = (units) => {
    let infoProduct = {
      ...item,
      quantity: units,
    };
    addToCart(infoProduct);
    navigate("/cart");
  };
  if (isLoading) {
    return <CardSkeleton />;
  }
  return (
    <>
      <ItemDetail item={item} onAdd={onAdd} initial={initial} />
    </>
  );
};
