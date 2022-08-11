import { useState } from "react";
import { createContext } from "react";
import AuthProvider from "./AuthContext";

export const NotfContext = createContext({});

const NotficationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const notify = (input, type) => {
    const listCap = notifications.length < 3;
    const notDoubled = !notifications.some((notf, index, arr) => arr.indexOf(notf.message) === index)

    if (listCap && notDoubled) {
      setNotifications([...notifications, {message: input, type: type}]);

      setTimeout(
        () => setNotifications([]),
        notifications.length > 0 ? 5000 : 10000
      );
    }
  };

  return (
    <NotfContext.Provider value={{ notifications, notify }}>
      <AuthProvider>{children}</AuthProvider>
    </NotfContext.Provider>
  );
};

export default NotficationProvider;
