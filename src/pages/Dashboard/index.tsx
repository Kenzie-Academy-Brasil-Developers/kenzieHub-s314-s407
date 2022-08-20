import { useContext } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";

import Button from "../../components/Button";
import PrivateContent from "../../components/PrivateContent";

import { DashboardContent } from "./styles";
import { AuthContext } from "../../contexts/AuthContext";
import { SwitchContext } from "../../contexts/SwitchContext";
import { ITech } from "../../types/typeAuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { modalSwitcher } = useContext(SwitchContext);

  return (
    <PrivateContent>
      <DashboardContent>
        <section className="content__tech">
          <h3>Tecnologias</h3>
          <Button handler={() => modalSwitcher("create_tech")}>
            <BsPlusLg />
          </Button>
        </section>
        <ul className="content__list">
          {user?.techs?.length > 0 ? user.techs.map((tech) => {
            return (
              <li className="list__skill" key={tech.id}>
                <h4>{tech.title}</h4>
                <div className="skill__details">
                  <span>{tech.status}</span>
                  <button onClick={() => modalSwitcher("update_tech", tech)}>
                    <FaEdit />
                  </button>
                  <button onClick={() => modalSwitcher("remove_tech", tech)}>
                    <FaRegTrashAlt />
                  </button>
                </div>
              </li>
            );
          }) : (
          <li className="list__empty">
            <h3>Parece que seu portfólio está vazio...</h3>
            <button onClick={() => modalSwitcher("create_tech", {} as ITech)}>Adicionar tecnologias</button>
          </li>
          )}
        </ul>
      </DashboardContent>
    </PrivateContent>
  );
};

export default Dashboard;
