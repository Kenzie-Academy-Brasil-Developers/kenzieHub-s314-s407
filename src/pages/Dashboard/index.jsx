import { FaRegTrashAlt } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";

import Button from "../../components/Button";
import PrivateContent from "../../components/PrivateContent";

import { DashboardContent } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Dashboard = () => {
  const { user, deleteTech } = useContext(AuthContext);

  return (
    <PrivateContent>
      <DashboardContent>
        <section className="content__tech">
          <h3>Tecnologias</h3>
          <Button buttonStyle="secondary">
            <BsPlusLg />
          </Button>
        </section>
        <ul className="content__list">
          {user.techs.length > 0 ? user.techs.map((tech) => {
            return (
              <li className="list__skill" key={tech.id}>
                <h4>{tech.title}</h4>
                <div className="skill__details">
                  <span>{tech.status}</span>
                  <button onClick={() => deleteTech(tech.id)}>
                    <FaRegTrashAlt />
                  </button>
                </div>
              </li>
            );
          }) : (
          <li className="list__empty">
            <h3>Parece que seu portfólio está vazio...</h3>
            <button>Adicionar tecnologias</button>
          </li>
          )}
        </ul>
      </DashboardContent>
    </PrivateContent>
  );
};

export default Dashboard;
