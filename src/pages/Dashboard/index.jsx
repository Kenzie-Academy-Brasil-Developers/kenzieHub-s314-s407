import { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import Button from "../../components/Button";
import LoadingScreen from "../../components/Loading";
import { AuthContext } from "../../contexts/AuthContext";
import { NotfContext } from "../../contexts/NotificationContext";

import { DashboardPage, Header } from "./styles";

const Home = () => {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  const { notify } = useContext(NotfContext);

  const handleLogout = () => {
    window.localStorage.clear();
    notify(`Até a próxima ${user.name.split(" ")[0]}!`, )
    navigate("/login");
  };

  if (loading) {
    return <LoadingScreen />
  }

  return user ? (
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
  ) : (
    <Navigate replace to="/login" />
  );
};

export default Home;
