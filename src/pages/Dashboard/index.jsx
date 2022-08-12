import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { AuthContext } from "../../contexts/AuthContext";
import { NotificationContext } from "../../contexts/NotificationContext";

import { DashboardPage, Header } from "./styles";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { toast, baseSettings } = useContext(NotificationContext);

  const handleLogout = () => {
    
    toast.info("Logout realizado com sucesso", baseSettings);
    window.localStorage.clear();
    navigate("/login");
  };

  return (
    <DashboardPage>
      <Header>
        <h1>Kenzie Hub</h1>
        <Button handler={handleLogout}>Sair</Button>
      </Header>
      <section>
        <h2>Olá, {user.name}</h2>
        <span>{user.course_module}</span>
      </section>
      <main>
        <h3>Que pena! Estamos em desenvolvimento :{"("}</h3>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </main>
    </DashboardPage>
  );
};

export default Dashboard;
