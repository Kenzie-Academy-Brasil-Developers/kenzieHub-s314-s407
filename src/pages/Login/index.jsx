import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import loginSchema from "../../validators/login";
import Formulary from "../../components/Formulary";
import CustomInput from "../../components/Input";
import Button from "../../components/Button";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <>
      <h1 className="login__header">Kenzie Hub</h1>
      <Formulary onSubmit={handleSubmit(signIn)}>
        <h3>Login</h3>
        <CustomInput
          id="email"
          label="Email"
          type="email"
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

        <Button submit buttonStyle="primary">
          Entrar
        </Button>
        <span>Ainda não possui uma conta?</span>
        <Button handler={() => navigate("/register")} buttonStyle="primary">
          Cadastre-se
        </Button>
      </Formulary>
    </>
  );
};

export default Login;
