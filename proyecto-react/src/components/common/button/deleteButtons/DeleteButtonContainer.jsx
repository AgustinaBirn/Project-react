import { useState } from "react";
import { DeleteButton } from "./DeleteButton";

export const DeleteButtonContainer = () => {
  const [showDeleteButton, setShowDeleteButton] = useState(true);

  const handleClick = () => {
    setShowDeleteButton(!setShowDeleteButton);
    console.log(showDeleteButton);
  };

  return (
    <DeleteButton
      showDeleteButton={showDeleteButton}
      handleClick={handleClick}
    />
  );
};
