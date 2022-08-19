import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";
import CustomModal from "../components/Modal";
import { AuthContext, ITech } from "./AuthContext";

interface ISwitchProps {
  children: ReactNode;
}

interface IModalOpener {
  modal_window: boolean;
  create_tech: boolean;
  update_tech: boolean;
  remove_tech: boolean;
  create_work: boolean;
  update_work: boolean;
  remove_work: boolean;
}

interface ISwitchProvider {
  isOpened: IModalOpener;
  modalSwitcher: (type: keyof IModalOpener, focused: ITech) => void;
}

export const SwitchContext = createContext<ISwitchProvider>({} as ISwitchProvider);

const SwitchProvider = ({ children }: ISwitchProps) => {
  const [isOpened, setIsOpened] = useState<IModalOpener>({
    modal_window: false,
    create_tech: false,
    update_tech: false,
    remove_tech: false,
    create_work: false,
    update_work: false,
    remove_work: false,
  });

  const { setFocus } = useContext(AuthContext);

  const modalSwitcher = (type: keyof IModalOpener, focused: ITech) => {
    let backup = isOpened;
    backup.modal_window = !backup.modal_window;
    backup[type] = !backup[type];

    setIsOpened({ ...backup });
    setFocus(focused);
  };

  return (
    <SwitchContext.Provider value={{ isOpened, modalSwitcher }}>
      {children}
      <CustomModal />
    </SwitchContext.Provider>
  );
};

export default SwitchProvider;
