//  prettier-ignore
import { createContext, useState, useContext, useEffect, ReactNode } from "react";
import api from "../services/api";
import { NotificationContext } from "./NotificationContext";
import { useLocation, useNavigate } from "react-router-dom";
import SwitchProvider from "./SwitchContext";
import { toast } from "react-toastify";
import { FieldValues } from "react-hook-form";

interface IAuthProps {
  children: ReactNode;
}

interface IAuthProvider {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  loading: boolean;
  // prettier-ignore
  register: ({ name, email, password, bio, contact, course_module }: IUserRegister) => Promise<void>;
  signIn: (data: IUserSignIn) => Promise<void>;
  removeTech: () => Promise<void>;
  focus: ITech;
  setFocus: React.Dispatch<React.SetStateAction<ITech>>;
}

export interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string | null;
}

interface IWork {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  user: { id: IUser["id"] };
  created_at: string;
  updated_at: string | null;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITech[];
  works: IWork[];
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
}

interface IUserRegister {
  name: string;
  email: string;
  password: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface IUserSignIn {
  email: string;
  password: string;
}

interface ISignInResponse {
  user: IUser;
  token: string;
}

interface ISignInRequest {
  email: string;
  password: string;
}

interface ILoginRequest extends FieldValues {
  [x: string]: ISignInRequest;
}

export const AuthContext = createContext<IAuthProvider>({} as IAuthProvider);

const AuthProvider = ({ children }: IAuthProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [focus, setFocus] = useState<ITech>({} as ITech);
  const [loading, setLoading] = useState(true);

  const { updateToast, loadPattern } = useContext(NotificationContext);
  const location = useLocation();
  const navigate = useNavigate();

  const signIn = async (data: ILoginRequest) => {
    const load = toast.loading(...loadPattern);
    console.log(data);
    const response = await api
      .post<ISignInResponse>("/sessions", data)
      .catch(() => updateToast(load, "Email ou senha inválidos", "error"));

    if (response) {
      const { token, user: userData } = response.data;

      localStorage.setItem("@kenzieHub(token)", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser(userData);
      updateToast(load, `Bem vindo ${userData.name.split(" ")[0]}`, "success");

      const navigatePath = location.state?.from?.pathname || "/dashboard";
      navigate(navigatePath, { replace: true });
    }
  };

  // prettier-ignore
  const register = async ({ name, email, password, bio, contact, course_module }: IUserRegister) => {
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
      .delete(`/users/techs/${focus.id}`)
      .catch(() => toast.update(load));

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
      setLoading(false);
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
