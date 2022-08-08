import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import registerSchema from "../../validators/register";
import Formulary from "../../components/Formulary";
import CustomInput from "../../components/Input";
import Button from "../../components/Button";

const Register = ({ notificator }) => {
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const registerUser = ({ name, email, password, bio, contact, course_module }) => {
    const options = {
      name: name,
      email: email,
      password: password,
      bio: bio,
      contact: contact,
      course_module: course_module,
    };
    api
    .post("/users", options)
    .then(() => {
      notificator("Conta criada com sucesso!", "SUCCESS");
      navigate("/login");
    })
    .catch(() => notificator("Email atualmente em uso", "FAIL"));
  };

  return (
    <>
      <header className="register__header">
        <h1>Kenzie Hub</h1>
        <Button handler={() => navigate("/login")}>Voltar</Button>
      </header>
      <Formulary onSubmit={handleSubmit(registerUser)}>
        <h3>Crie sua conta</h3>
        <span>Rápido e grátis, vamos nessa</span>

        <CustomInput
          id="name"
          label="Nome"
          placeholder="Digite aqui seu nome"
          register={register}
          error={errors?.name}
        />
        <CustomInput
          id="email"
          label="Email"
          placeholder="Digite aqui seu email"
          register={register}
          error={errors?.email}
        />
        <CustomInput
          id="password"
          type="password"
          label="Senha"
          placeholder="Digite aqui sua senha"
          register={register}
          error={errors?.password}
        />
        <CustomInput
          id="password_confirm"
          type="password"
          label="Confirmar senha"
          placeholder="Digite novamente sua senha"
          register={register}
          error={errors?.password_confirm}
        />
        <CustomInput
          id="bio"
          label="Bio"
          placeholder="Fale sobre você"
          register={register}
          error={errors?.bio}
        />
        <CustomInput
          id="contact"
          label="Contato"
          type="phone"
          placeholder="(00) 00000-0000"
          register={register}
          error={errors?.contact}
        />
        <CustomInput
          select
          id="course_module"
          label="Módulo"
          register={register}
          error={errors?.course_module}
        />

        <Button
          submit
          buttonStyle="primary"
          type="submit"
        >
          Cadastrar
        </Button>
      </Formulary>
    </>
  );
};

export default Register;
