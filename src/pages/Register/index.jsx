import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../components/Button";
import CustomInput from "../../components/Input";
import Formulary from "../../components/Formulary";
import registerSchema from "../../validators/register";
import { AuthContext } from "../../contexts/AuthContext";
import { moduleOptions } from "../../components/Input/options";

const Register = () => {
  const navigate = useNavigate();
  const { register: registerUser } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema),
  });

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
          options={moduleOptions}
        />

        <Button submit buttonStyle="primary" type="submit">
          Cadastrar
        </Button>
      </Formulary>
    </>
  );
};

export default Register;
