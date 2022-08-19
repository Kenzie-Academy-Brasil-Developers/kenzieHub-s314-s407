import { useContext } from "react";
import { toast } from "react-toastify";
import { FieldValues, useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../Button";
import CustomInput from "../Input";
import api from "../../services/api";
import Formulary from "../Formulary";
import { techStatus } from "../Input/options";
import createTechSchema from "../../validators/createTech";
import { SwitchContext } from "../../contexts/SwitchContext";
import { AuthContext, ITech, IUser } from "../../contexts/AuthContext";
import { NotificationContext } from "../../contexts/NotificationContext";

interface IDataRequest extends FieldValues {
  [x: string]: IAddTechRequest;
}

interface IAddTechRequest {
  title: string;
  status: string;
}

interface IAddTechResponse {
  id: string;
  title: string;
  status: string;
  user: {
    id: IUser["id"];
  };
  created_at: string;
  updated_at: string;
}

const CreateTech = () => {
  const { updateToast, loadPattern } = useContext(NotificationContext);
  const { setUser } = useContext(AuthContext);

  const { isOpened, modalSwitcher } = useContext(SwitchContext);
  // prettier-ignore
  const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(createTechSchema),
      });

  const addTech = async (data: IDataRequest) => {
    const load = toast.loading(...loadPattern);
    const response = await api
      .post<IAddTechResponse>("/users/techs", data)
      .catch(() => {
        //  prettier-ignore
        updateToast( load, "Tecnologia atualmente em seu portfólio", "warning" );
      });

    if (response) {
      updateToast(load, "Tecnologia adicionada a seu portfólio", "success");
      modalSwitcher("create_tech", {} as ITech);
    }
    const { data: userData } = await api.get("/profile");
    setUser(userData);
  };
  return (
    isOpened.create_tech && (
      <Formulary onSubmit={handleSubmit(addTech)}>
        <header>
          <h3>Cadastrar Tecnologia</h3>
          <AiOutlineClose
            onClick={() => modalSwitcher("create_tech", {} as ITech)}
          />
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
          label="Selecionar status"
          register={register}
          error={errors?.title}
          options={techStatus}
        />
        <Button submit buttonStyle="primary">
          Cadastrar Tecnologia
        </Button>
      </Formulary>
    )
  );
};

export default CreateTech;
