import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";
import loginSchema from "../../validators/login";

const Login = ({ handleMessage, handleUser }) => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitLogin = (data) => {
    api
      .post("/sessions", { ...data })
      .then((response) => {
        window.localStorage.clear();
        window.localStorage.setItem("@kenzieHub: authToken", response.data.token);

        const user = response.data.user;
        handleMessage(`Bem vindo ${user.name.split(" ")[0]}!`);
        handleUser(user);

        navigate("/dashboard");
      })
      .catch(() => handleMessage("Login ou senha incorretos"));
  };

  return (
    <>
      <h1>Kenzie Hub</h1>
      <form onSubmit={handleSubmit(submitLogin)}>
        <h3>Login</h3>
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Insira seu email"
          {...register("email")}
        />

        <label htmlFor="">Senha</label>
        <input type="password" placeholder="Senha" {...register("password")} />

        <button type="submit">Entrar</button>
        <span>Ainda não possui uma conta?</span>
        <button onClick={() => navigate("/register")} type="submit">
          Cadastre-se
        </button>
      </form>
    </>
  );
};

export default Login;
