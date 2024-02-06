import { useState } from "react";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  return <Navbar changeMode={changeMode} darkMode={darkMode} />;
};

// const Navbar = () => {

//     return(
//         <h1>Navbar</h1>
//     )
// }

export default NavbarContainer;
