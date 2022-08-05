import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import registerSchema from "../../validators/register";

const Register = ({ handleMessage }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const currentError = errors[Object.keys(errors)[0]];
  useEffect(() => {
    handleMessage(currentError?.message);
  }, [currentError?.message, handleMessage]);

  const registerUser = ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) => {
    const options = {
      name: name,
      email: email,
      password: password,
      bio: bio,
      contact: contact,
      course_module: course_module,
    };
    console.log(options);
    api
      .post("/users", options)
      .then(() => {
        handleMessage("Conta criada com sucesso!")
        navigate("/login")
      })
      .catch(() => handleMessage("Email atualmente em uso"));
  };
  return (
    <>
      <header>
        <h1>Kenzie Hub</h1>
        <button onClick={() => navigate("login")}>Voltar</button>
      </header>
      <form onSubmit={handleSubmit(registerUser)}>
        <h3>Crie sua conta</h3>
        <p>Rápido e grátis, vamos nessa</p>

        <label htmlFor="name">Nome</label>
        <input type="text" {...register("name")} />

        <label htmlFor="email">Email</label>
        <input type="text" {...register("email")} />

        <label htmlFor="password">Senha</label>
        <input type="password" {...register("password")} />

        <label htmlFor="password_confirm">Confirmar Senha</label>
        <input type="password" {...register("password_confirm")} />

        <label htmlFor="bio">Bio</label>
        <input type="text" {...register("bio")} />

        <label htmlFor="contact">Contato</label>
        <input type="text" {...register("contact")} />

        <label htmlFor="course_module">Selecionar Módulo</label>
        <select
          defaultValue="1º Módulo (Frontend básico)"
          {...register("course_module")}
        >
          <option value="1º Módulo (Frontend básico)">Módulo 1</option>
          <option value="2º Módulo (Frontend avançado)">Módulo 2</option>
          <option value="3º Módulo (React)">Módulo 3</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};

export default Register;
