import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
// import { FetchingDataContainer } from "./components/pages/fetchingData/FetchingDataContainer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/common/cart/CartContainer";
import { Layout } from "./components/layout/Layout";
import { CheckoutContainer } from "./components/pages/checkout/CheckoutContainer";
import { CartContextProvider } from "./context/CartContext";
import { FetchingAxios } from "./components/pages/fetchingAxios/FetchingAxios";
import { Dashboard } from "./components/pages/dashboard/Dashboard";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { FormFormik } from "./components/pages/formFormik/FormFormik";
// TODO LO QUE QUIERO QUE SE VEA EN EL HTML TIENE QUE ESTAR ACA
const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/checkout" element={<CheckoutContainer />} />
              <Route path="/formik" element={<FormFormik />} />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Route>

            <Route element={<ProtectedRoutes />}>
              <Route element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/fetching-axios" element={<FetchingAxios />} />
              </Route>
            </Route>
          </Routes>
          {/* <FetchingDataContainer /> */}
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
