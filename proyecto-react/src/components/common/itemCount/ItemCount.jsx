import { Button } from "@mui/material";

export const ItemCount = ({ subtract, counter, add }) => {
  return (
    <>
      <Button onClick={subtract} disabled={counter === 1 ? true : false}>
        -
      </Button>
      <strong>{counter}</strong>
      <Button onClick={add}>+</Button>
    </>
  );
};
