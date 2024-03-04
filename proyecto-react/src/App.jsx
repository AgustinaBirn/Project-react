import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer/Footer";
import NavbarContainer from "./components/layout/Navbar/NavbarContainer";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
// import { FetchingDataContainer } from "./components/pages/fetchingData/FetchingDataContainer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/common/cart/Cart";

// TODO LO QUE QUIERO QUE SE VEA EN EL HTML TIENE QUE ESTAR ACA
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavbarContainer />

          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route
              path="/category/:category"
              element={<ItemListContainer />}
            ></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
          </Routes>
          {/* <FetchingDataContainer /> */}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
