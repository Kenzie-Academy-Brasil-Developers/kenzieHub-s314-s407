import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";
import loginSchema from "../../validators/login";
import Formulary from "../../components/Formulary";
import CustomInput from "../../components/Input";
import Button from "../../components/Button";

const Login = ({ handleMessage, handleUser }) => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitLogin = (data) => {
    api
      .post("/sessions", { ...data })
      .then((response) => {
        window.localStorage.clear();
        window.localStorage.setItem(
          "@kenzieHub: authToken",
          response.data.token
        );

        const user = response.data.user;
        handleMessage(`Bem vindo ${user.name.split(" ")[0]}!`);
        handleUser(user);

        navigate("/dashboard");
      })
      .catch(() => handleMessage("Login ou senha incorretos"));
  };

  return (
    <>
      <h1 className="login__header">Kenzie Hub</h1>
      <Formulary onSubmit={handleSubmit(submitLogin)}>
        <h3>Login</h3>
        <CustomInput
          id="email"
          label="Email"
          placeholder="Insira seu email"
          register={register}
          error={errors?.email}
        />
        <CustomInput
          id="password"
          label="Senha"
          type="password"
          placeholder="Insira sua senha"
          register={register}
          error={errors?.password}
        />

        <Button submit buttonStyle="primary">Entrar</Button>
        <span>Ainda não possui uma conta?</span>
        <Button handler={() => navigate("/register")} buttonStyle="primary">Cadastre-se</Button>
      </Formulary>
    </>
  );
};

export default Login;
