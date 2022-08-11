import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = ({ message, handleMessage }) => {
  const handleNotification = (input, type) => {
    handleMessage(...message, { message: input, type: type });

    setTimeout(() => {}, message.length > 0 ? 5000 : 1000);
  };

  return (
    <Routes>
      <Route index path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Home />} />
      <Route
        path="/register"
        element={<Register notificator={handleNotification} />}
      />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
