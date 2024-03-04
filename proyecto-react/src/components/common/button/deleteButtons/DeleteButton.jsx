import Chip from "@mui/material/Chip";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

export const DeleteButton = ({ showDeleteButton, handleClick }) => {
  return (
    <div className="deleteButton">
      {showDeleteButton ? (
        <Chip
          label="Eliminar"
          onClick={handleClick}
          onDelete={handleClick}
          deleteIcon={<DeleteIcon />}
          variant="outlined"
        />
      ) : (
        <Chip
          label="Agregar"
          onClick={handleClick}
          onDelete={handleClick}
          deleteIcon={<DoneIcon />}
          variant="outlined"
        />
      )}
    </div>
  );
};
