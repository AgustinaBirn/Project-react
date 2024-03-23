import { Input } from "../../common/input/Input";
import CartWidget from "../../common/cart/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  let user = { rol: "admin" };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center flex-column">
      <div className="row d-flex justify-content-between w-100">
        <Link className="col navbar-brand text-center" to="/">
          Tienda
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="col-7 justify-content-around collapse navbar-collapse"
          id="navbarTogglerDemo02"
        >
          <Input />
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Mi cuenta
              </a>
            </li>
            {user.rol === "admin" && (
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link to="/Cart">
                <CartWidget />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row d-flex justify-content-between w-100">
        <div
          className="row justify-content-around collapse navbar-collapse"
          id="navbarTogglerDemo02"
        >
          <ul className="row navbar-nav mb-2 mb-lg-0 justify-content-center">
            <li className="col-3 nav-item">
              <Link
                className="text-center nav-link active"
                aria-current="page"
                to="/category/Pantalones"
              >
                Pantalones
              </Link>
            </li>
            <li className="col-3 nav-item">
              <Link
                className="text-center nav-link active"
                aria-current="page"
                to="/category/Remeras"
              >
                Remeras
              </Link>
            </li>
            <li className="col-3 nav-item">
              <Link
                className="text-center nav-link active"
                aria-current="page"
                to="/category/Vestidos"
              >
                Vestidos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
