import { useNavigate } from "react-router-dom";

const Home = ({ user }) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    window.localStorage.clear()
    navigate("/login")
  }

  return (
    <>
      <header>
        <h1>Kenzie Hub</h1>
        <button onClick={handleLogout}>Sair</button>
      </header>
      <section>
        <h2>Olá, {user.name}</h2>
        <span>{user.course_module}</span>
      </section>
      <main>
        <h3>Que pena! Estamos em desenvolvimento :{"("}</h3>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </main>
    </>
  );
};

export default Home;
