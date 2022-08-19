import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";

import Button from "../Button";
import CustomInput from "../Input";
import api from "../../services/api";
import Formulary from "../Formulary";
import { techStatus } from "../Input/options";
import { AuthContext } from "../../contexts/AuthContext";
import { NotificationContext } from "../../contexts/NotificationContext";
import { SwitchContext } from "../../contexts/SwitchContext";
import { toast } from "react-toastify";
import { ITech } from "../../types/typeAuthContext";
import { IUpdateTechRequestModal } from "../../types/typeComponents";


const UpdateTech = () => {
  const { focus, setUser } = useContext(AuthContext);
  const { modalSwitcher } = useContext(SwitchContext);
  const { updateToast, loadPattern } = useContext(NotificationContext);

  const update: SubmitHandler<IUpdateTechRequestModal> = async (data) => {
    const load = toast.loading(...loadPattern);
    const response = await api
      .put<ITech>(`users/techs/${focus.id}`, data)
      .catch(() => updateToast(load, "Opa, parece que algo quebrou", "error"));

    const { data: userData } = await api.get("/profile");
    if (response) {
      setUser(userData);
      // prettier-ignore
      updateToast(load, "Tecnologia alterada com sucesso", "success");
      modalSwitcher("update_tech", {} as ITech);
    }
  };

  const { register, handleSubmit } = useForm<IUpdateTechRequestModal>();
  return (
    <Formulary onSubmit={handleSubmit(update)}>
      <header>
        <h3>Editar Tecnologia</h3>
        <AiOutlineClose
          onClick={() => modalSwitcher("update_tech", {} as ITech)}
        />
      </header>
      <h3>Alteração de status</h3>
      <CustomInput
        select
        id="status"
        label="Status"
        register={register}
        options={techStatus}
      />
      <div className="double__buttons">
        <Button buttonStyle="primary" submit>
          Atualizar
        </Button>
        <Button
          buttonStyle="primary"
          handler={() => modalSwitcher("update_tech", {} as ITech)}
        >
          Voltar
        </Button>
      </div>
    </Formulary>
  );
};

export default UpdateTech;
