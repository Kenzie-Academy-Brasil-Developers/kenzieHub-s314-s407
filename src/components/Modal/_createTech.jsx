import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../Button";
import CustomInput from "../Input";
import api from "../../services/api";
import Formulary from "../Formulary";
import { techStatus } from "../Input/options";
import createTechSchema from "../../validators/createTech";
import { SwitchContext } from "../../contexts/SwitchContext";
import { NotificationContext } from "../../contexts/NotificationContext";
import { AuthContext } from "../../contexts/AuthContext";

const CreateTech = () => {
  const { updateToast, toast, baseSettings } = useContext(NotificationContext);
  const { setUser } = useContext(AuthContext);

  const loadPattern = ["Solicitação em andamento...", baseSettings];

  const { isOpened, modalSwitcher } = useContext(SwitchContext);
  // prettier-ignore
  const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(createTechSchema),
      });

  const addTech = async (data) => {
    const load = toast.loading(...loadPattern);
    const response = await api.post("/users/techs", data).catch(() => {
      //  prettier-ignore
      updateToast( load, "Tecnologia atualmente em seu portfólio", "warning" );
    });

    if (response) {
      updateToast(load, "Tecnologia adicionada em seu portfólio", "success");
      modalSwitcher("create_tech", {});
    }
    const { data: userData } = await api.get("/profile");
    setUser(userData);
  };
  return (
    isOpened.create_tech && (
      <Formulary onSubmit={handleSubmit(addTech)}>
        <header>
          <h3>Cadastrar Tecnologia</h3>
          <AiOutlineClose onClick={() => modalSwitcher("create_tech", {})} />
        </header>
        <CustomInput
          id="title"
          label="Nome"
          placeholder="Nome da tecnologia"
          register={register}
          error={errors?.title}
        />
        <CustomInput
          select
          id="status"
          label="Selecionar status"
          register={register}
          error={errors?.title}
          options={techStatus}
        />
        <Button submit buttonStyle="primary" type="submit">
          Cadastrar Tecnologia
        </Button>
      </Formulary>
    )
  );
};

export default CreateTech;
