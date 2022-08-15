import { useContext, useState } from "react";
import { createContext } from "react";
import CustomModal from "../components/Modal";
import { AuthContext } from "./AuthContext";

export const SwitchContext = createContext();

const SwitchProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState({
    modal_window: false,
    create_tech: false,
    update_tech: false,
    remove_tech: false,
    create_work: false,
    update_work: false,
    remove_work: false,
  });

  const { setFocus } = useContext(AuthContext);

  const modalSwitcher = (type, focused) => {
    let backup = isOpened;
    backup.modal_window = !backup.modal_window;
    backup[type] = !backup[type];

    setIsOpened({ ...backup });
    setFocus(focused);
  };

  return (
    <SwitchContext.Provider
      value={{ isOpened, modalSwitcher }}
    >
      {children}
      <CustomModal />
    </SwitchContext.Provider>
  );
};

export default SwitchProvider;
