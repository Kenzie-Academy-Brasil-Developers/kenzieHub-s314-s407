import { createContext } from "react";
import { toast } from "react-toastify";

import ToastBox from "../components/ToastBox";
import AuthProvider from "./AuthContext";
import "react-toastify/dist/ReactToastify.css";

export const NotificationContext = createContext({});

const NotficationProvider = ({ children }) => {
  const baseSettings = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const updateToast = (loader, message, toastType) => {
    const settings = {
      ...baseSettings,
      render: message,
      type: toastType,
      isLoading: false,
    };

    toast.update(loader, settings);
  };

  return (
    <NotificationContext.Provider value={{ updateToast, toast, baseSettings }}>
      <AuthProvider>
        {children}
        <ToastBox />
      </AuthProvider>
    </NotificationContext.Provider>
  );
};

export default NotficationProvider;
