import { createContext } from "react";
//  prettier-ignore
import { Id, toast, ToastContent, ToastOptions, UpdateOptions } from "react-toastify";

import ToastBox from "../components/ToastBox";
import AuthProvider from "./AuthContext";
import { ReactNode } from "react";

import "react-toastify/dist/ReactToastify.css";

interface INotificationProps {
  children: ReactNode;
}

interface INotificationProvider {
  updateToast: (loader: Id, message: string, toastType: string) => void;
  loadPattern: [ToastContent, ToastOptions];
}

export const NotificationContext = createContext<INotificationProvider>(
  {} as INotificationProvider
);

const NotficationProvider = ({ children }: INotificationProps) => {
  const baseSettings = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  } as ToastOptions;

  const updateToast = (loader: Id, message: string, toastType: string) => {
    const settings = {
      ...baseSettings,
      render: message,
      type: toastType,
      isLoading: false,
    } as UpdateOptions;

    toast.update(loader, settings);
  };

  const loadPattern = [
    "Solicitação em andamento...",
    baseSettings,
  ] as INotificationProvider["loadPattern"];

  return (
    <NotificationContext.Provider value={{ updateToast, loadPattern }}>
      <AuthProvider>
        {children}
        <ToastBox />
      </AuthProvider>
    </NotificationContext.Provider>
  );
};

export default NotficationProvider;
