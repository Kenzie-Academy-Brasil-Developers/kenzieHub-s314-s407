import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = ({ message, handleMessage }) => {
  const [username, setUsername] = useState("");

  const handleNotification = (input, type) => {
    if (message.status) {
      handleMessage({ ...message, status: false });

      handleMessage({ message: input, type: type, status: true });

      setTimeout(() => {
        handleMessage({ ...message, status: false });
      }, 5000);
    } else {
      handleMessage({ message: input, type: type, status: !message.status });

      setTimeout(() => {
        handleMessage({ ...message, status: false });
      }, 5000);
    }
  };

  return (
    <Routes>
      <Route
        index
        path="/login"
        element={
          <Login handleUser={setUsername} notificator={handleNotification} />
        }
      />
      <Route
        path="/dashboard"
        element={<Home user={username} notificator={handleNotification} />}
      />
      <Route
        path="/register"
        element={<Register notificator={handleNotification} />}
      />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
