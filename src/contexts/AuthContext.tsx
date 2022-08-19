import api from "../services/api";
import { toast } from "react-toastify";
import { SubmitHandler } from "react-hook-form";
//  prettier-ignore
import { createContext, useState, useContext, useEffect } from "react";

import { NotificationContext } from "./NotificationContext";
import { useLocation, useNavigate } from "react-router-dom";
import SwitchProvider from "./SwitchContext";
import { IGeneralProps } from "../types/typeComponents";
//  prettier-ignore
import { IAuthProvider, IStateType, ITech, IUser, ILoginRequest, IRegisterRequest } from "../types/typeAuthContext";

export const AuthContext = createContext<IAuthProvider>({} as IAuthProvider);

const AuthProvider = ({ children }: IGeneralProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [focus, setFocus] = useState<ITech>({} as ITech);
  const [loading, setLoading] = useState(true);

  const { updateToast, loadPattern } = useContext(NotificationContext);
  const { state } = useLocation();
  const stateType = state as IStateType;
  const navigate = useNavigate();

  const signIn: SubmitHandler<ILoginRequest> = async (data) => {
    const load = toast.loading(...loadPattern);
    const response = await api
      .post("/sessions", data)
      .catch(() => updateToast(load, "Email ou senha inválidos", "error"));

    if (response) {
      const { token, user: userData } = response.data;

      localStorage.setItem("@kenzieHub(token)", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser(userData);
      updateToast(load, `Bem vindo ${userData.name.split(" ")[0]}`, "success");

      const navigatePath = stateType?.from?.pathname || "/dashboard";
      navigate(navigatePath, { replace: true });
    }
  };

  const register: SubmitHandler<IRegisterRequest> = async (
    {name, email, password, bio, contact, course_module}
    ) => {
    const options = {
      name: name,
      email: email,
      password: password,
      bio: bio,
      contact: contact,
      course_module: course_module,
    };

    const load = toast.loading(...loadPattern);
    const response = await api
      .post("/users", options)
      .catch(() => updateToast(load, "Este email já está em uso", "error"));

    if (response) {
      updateToast(load, "Conta criada com sucesso", "success");
      navigate("/login");
    }
  };

  const removeTech = async () => {
    const load = toast.loading(...loadPattern);
    await api
      .delete<void>(`/users/techs/${focus.id}`)
      .catch<void>(() => toast.update(load));

    const { data } = await api.get("/profile");
    setUser(data);
    data &&
      updateToast(load, "Tecnologia excluída de seu portfólio", "success");
  };

  useEffect(() => {
    const loadAuth = async () => {
      const token = localStorage.getItem("@kenzieHub(token)");

      if (token) {
        try {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          const { data } = await api.get("/profile");

          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };
    loadAuth();
  }, []);

  return (
    <AuthContext.Provider
      //  prettier-ignore
      value={{ user, setUser, loading, register, signIn, removeTech, focus, setFocus }}
    >
      <SwitchProvider>{children}</SwitchProvider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
