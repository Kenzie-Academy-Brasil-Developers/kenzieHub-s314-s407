import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

import { DashboardPage, Header } from "./styles";

const Home = ({ user, notificator }) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    window.localStorage.clear()
    notificator(`Até a próxima ${user.name.split(" ")[0]}!`, )
    navigate("/login")
  }

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
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </main>
    </DashboardPage>
  );
};

export default Home;
