import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = ({ handleMessage }) => {
  const [username, setUsername] = useState("");
  
  return (
    <Routes>
      <Route index path="/login" element={<Login handleMessage={handleMessage} handleUser={setUsername} />} />
      <Route path="/dashboard" element={<Home user={username}/>}/>
      <Route path="/register" element={<Register handleMessage={handleMessage} />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
