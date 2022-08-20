import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import LoadingScreen from "../Loading";

const PrivateRoutes = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <LoadingScreen />;

  return user.id ? (
    <Outlet />
  ) : (
    <Navigate replace to="/login" state={{ from: location }} />
  );
};

export default PrivateRoutes;
