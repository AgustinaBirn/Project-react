import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import NavbarContainer from "./Navbar/NavbarContainer";

export const Layout = () => {
  return (
    <>
      <NavbarContainer />
      <Outlet />
      <Footer />
    </>
  );
};
