import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  // hacer contexto para usuarios

  let user = {
    rol: "admin",
  };

  return <>{user.rol === "admin" ? <Outlet /> : <Navigate to={"/"} />}</>;
};
