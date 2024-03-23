import { useContext, useState } from "react";
import { Checkout } from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  let totalPrice = getTotalPrice();

  const sentForm = (event) => {
    event.preventDefault();
    console.log("Se envió el formulario");
    let order = {
      buyer: userInfo,
      items: cart,
      total: totalPrice,
    };

    let orderCollections = collection(db, "orders");

    addDoc(orderCollections, order).then((res) => setOrderId(res.id));

    cart.forEach((product) => {
      let refDoc = doc(db, "stock", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
    });

    clearCart();
  };

  const captionInfo = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  //   const captionName = (event) => {
  //     setUserInfo({
  //       ...userInfo,
  //       name: event.target.value,
  //     });
  //   };

  //   const captionLastname = (event) => {
  //     setUserInfo({
  //       ...userInfo,
  //       lastName: event.target.value,
  //     });
  //   };
  return (
    <Checkout orderId={orderId} sentForm={sentForm} captionInfo={captionInfo} />
  );
};
