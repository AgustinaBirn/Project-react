import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStock } from "../../../api/StockApi";
import { ItemList } from "./ItemList";
import { CardSkeleton } from "../../common/CardSkeleton";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(true);
  //   getStock().then((resp) => {
  //     if (category) {
  //       const productFilter = resp.filter(
  //         (product) => product.category === category
  //       );
  //       setProducts(productFilter);
  //     } else {
  //       setProducts(resp);
  //     }
  //     setIsLoading(false);
  //   });
  // }, [category]);

  useEffect(() => {
    // setIsLoading(true);
    // let stockCollection = collection(db, "stock");
    // getDocs(stockCollection)
    //   .then((res) => {
    //     let newArray = res.docs.map((element) => {
    //       return { ...element.data(), id: element.id };
    //     });
    //     setProducts(newArray);
    //   })
    //   .finally(() => setIsLoading(false));

    let stockCollection = collection(db, "stock");

    let consult = stockCollection;

    if (category) {
      let stockCollectionFiltered = query(
        stockCollection,
        where("category", "==", category)
      );
      consult = stockCollectionFiltered;
    }

    getDocs(consult)
      .then((res) => {
        let newArray = res.docs.map((element) => {
          return { ...element.data(), id: element.id };
        });
        setProducts(newArray);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  if (isLoading) {
    return (
      <>
        <CardSkeleton />;
        <CardSkeleton />;
        <CardSkeleton />;
        <CardSkeleton />;
      </>
    );
  }

  return (
    <>
      <ItemList product={products} />;
    </>
  );
};
