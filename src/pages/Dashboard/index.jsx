import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { AuthContext } from "../../contexts/AuthContext";
import { NotfContext } from "../../contexts/NotificationContext";

import { DashboardPage, Header } from "./styles";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { notify } = useContext(NotfContext);

  const handleLogout = () => {
    window.localStorage.clear();
    notify(`Até a próxima ${user.name.split(" ")[0]}!`);
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
