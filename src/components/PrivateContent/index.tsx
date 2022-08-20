import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";

import { NotificationContext } from "../../contexts/NotificationContext";
import { IGeneralProps } from "../../types/typeComponents";
import Button from "../Button";
import { Header, NavBar, PageBase, UserInfos } from "./styles";

const PrivateContent = ({ children }: IGeneralProps) => {
  const { baseSettings } = useContext(NotificationContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  const logout = () => {
    toast.info("Você foi desconectado", baseSettings);
    window.localStorage.clear();
    navigate("/login");
  };

  return (
    <PageBase>
      <Header>
        <NavBar>
          <h1>Kenzie Hub</h1>
          <Button handler={logout}>Sair</Button>
        </NavBar>
        <UserInfos>
          <h2>Olá, {user.name}</h2>
          <span>{user.course_module}</span>
        </UserInfos>
      </Header>
      {children}
    </PageBase>
  );
};

export default PrivateContent;
