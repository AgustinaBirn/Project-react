import { Outlet } from "react-router-dom";
import Footer from "../../layout/Footer/Footer";
import NavbarContainer from "../../layout/Navbar/NavbarContainer";
import { HomeContainer } from "../home/HomeContainer";

export const BodyContainer = () => {
  return (
    <body>
      <Outlet />
      <NavbarContainer />
      <HomeContainer />
      <Footer />
    </body>
  );
};
