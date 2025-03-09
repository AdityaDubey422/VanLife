import { Outlet, Navigate, useLocation } from "react-router";

export default function AuthRequired() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("loggedin");
  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ message: "You must log in first!", from: location }}
        replace
      />
    );
  }
  return <Outlet />;
}
