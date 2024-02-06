import { Button } from "@mui/material";
import CardWidget from "../../common/Card/CardWidget";

const Navbar = ({ changeMode, darkMode }) => {
  return (
    <div>
      <div>logo</div>
      <ul>
        <li>Productos</li>
        <li>SALE</li>
        <li>Nueva colección</li>
      </ul>

      <CardWidget />
      <Button color={darkMode ? "secondary" : "error"} onClick={changeMode}>
        Modo oscuro
      </Button>
    </div>
  );
};

export default Navbar;
