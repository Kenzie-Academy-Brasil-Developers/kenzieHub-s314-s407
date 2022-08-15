import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

import Button from "../Button";
import Formulary from "../Formulary";
import { AuthContext } from "../../contexts/AuthContext";
import { SwitchContext } from "../../contexts/SwitchContext";

const RemoveTech = () => {
  const { focus, removeTech } = useContext(AuthContext);
  const { isOpened, modalSwitcher } = useContext(SwitchContext);

  return (
    isOpened.remove_tech && (
      <Formulary
        onSubmit={(event) => {
          event.preventDefault()
          removeTech();
          modalSwitcher("remove_tech", {});
        }}
      >
        <header>
          <h3>Remover Tecnologia</h3>
          <AiOutlineClose onClick={() => modalSwitcher("remove_tech", {})} />
        </header>
        <h3>
          Tem certeza que deseja remover "{focus.title}" de seu portfólio de
          tecnologias?
        </h3>
        <div className="double__buttons">
          <Button buttonStyle="primary" submit>
            Sim
          </Button>
          <Button
            buttonStyle="primary"
            handler={() => modalSwitcher("remove_tech", {})}
          >
            Não
          </Button>
        </div>
      </Formulary>
    )
  );
};

export default RemoveTech;
