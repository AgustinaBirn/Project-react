import { useState } from "react";
import { ItemCount } from "./ItemCount";

export const Counter = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  const add = () => {
    counter < stock ? setCounter(counter + 1) : counter;
  };

  const subtract = () => {
    if (counter == 1) {
      return counter == 1;
    } else {
      setCounter(counter - 1);
    }
  };

  return <ItemCount subtract={subtract} counter={counter} add={add} />;
};
