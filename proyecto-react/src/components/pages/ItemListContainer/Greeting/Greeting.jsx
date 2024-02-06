import { Button, TextField } from "@mui/material";

export const Greeting = ({ name, greet, inputName }) => {
  return (
    <div>
      <form action="submit">
        <TextField
          id="outlined-basic"
          label="Escriba su nombre"
          variant="outlined"
          value={name}
          onChange={inputName}
        />
        <Button onClick={greet}>Saludar</Button>
      </form>
    </div>
  );
};

// guardar y vincular
