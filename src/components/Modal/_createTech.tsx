import { useContext } from "react";
import { toast } from "react-toastify";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../Button";
import CustomInput from "../Input";
import api from "../../services/api";
import Formulary from "../Formulary";
import { techStatus } from "../Input/options";
import createTechSchema from "../../validators/createTech";
import { SwitchContext } from "../../contexts/SwitchContext";
import { AuthContext } from "../../contexts/AuthContext";
import { NotificationContext } from "../../contexts/NotificationContext";
import { IAddTechRequest, IAddTechResponse } from "../../types/typeComponents";
import { IUser } from "../../types/typeAuthContext";

const CreateTech = () => {
  const { updateToast, loadPattern } = useContext(NotificationContext);
  const { setUser } = useContext(AuthContext);

  const { modalSwitcher } = useContext(SwitchContext);
  // prettier-ignore
  const { register, handleSubmit, formState: { errors } } = useForm<IAddTechRequest>({
        resolver: yupResolver(createTechSchema),
      });

  const addTech: SubmitHandler<IAddTechRequest> = async (data) => {
    const load = toast.loading(...loadPattern);
    try {
      const { data: response } = await api.post<IAddTechResponse>("/users/techs", data)
      // const responseData = response as IAddTechResponse;

      updateToast(load, `${response.title} adicionado ao seu portfólio`, "success");
      modalSwitcher("create_tech");
    } catch (error) {
      console.error(error);
      updateToast(load, "Tecnologia atualmente em seu portfólio", "warning");
    }
    const { data: userData } = await api.get<IUser>("/profile");
    setUser(userData);
  };
  return (
    <Formulary onSubmit={handleSubmit(addTech)}>
      <header>
        <h3>Cadastrar Tecnologia</h3>
        <AiOutlineClose onClick={() => modalSwitcher("create_tech")} />
      </header>
      <CustomInput
        id="title"
        label="Nome"
        placeholder="Nome da tecnologia"
        register={register}
        error={errors?.title?.message}
      />
      <CustomInput
        select
        id="status"
        label="Selecionar status"
        register={register}
        options={techStatus}
      />
      <Button submit buttonStyle="primary">
        Cadastrar Tecnologia
      </Button>
    </Formulary>
  );
};

export default CreateTech;
