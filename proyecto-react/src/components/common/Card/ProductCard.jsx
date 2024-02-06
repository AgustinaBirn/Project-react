import { Counter } from "../itemCount/ItemCounterContainer.jsx";

export const ProductCard = ({ img, title, desc, size, price, stock }) => {
  return (
    <div>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h3>{desc}</h3>
      <h3>{size}</h3>
      <h3>{price}</h3>
      <Counter stock={stock} />
    </div>
  );
};
