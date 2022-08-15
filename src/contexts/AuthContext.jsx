import { createContext, useState, useContext, useEffect } from "react";
import api from "../services/api";
import { NotificationContext } from "./NotificationContext";
import { useLocation, useNavigate } from "react-router-dom";
import SwitchProvider from "./SwitchContext";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [focus, setFocus] = useState(null)
  const [loading, setLoading] = useState(true);

  const { updateToast, toast, baseSettings } = useContext(NotificationContext);
  const location = useLocation();
  const navigate = useNavigate();

  const loadPattern = ["Solicitação em andamento...", baseSettings];

  const signIn = async (data) => {
    const load = toast.loading(...loadPattern);
    const response = await api
      .post("/sessions", data)
      .catch(() => updateToast(load, "Email ou senha inválidos", "error"));

    if (response) {
      const { token, user: userData } = response.data;

      localStorage.setItem("@kenzieHub(token)", token);
      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(userData);
      updateToast(load, `Bem vindo ${userData.name.split(" ")[0]}`, "success");

      const navigatePath = location.state?.from?.pathname || "/dashboard";
      navigate(navigatePath, { replace: true });
    }
  };

  // prettier-ignore
  const register = async ({ name, email, password, bio, contact, course_module }) => {
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
    await api.delete(`/users/techs/${focus.id}`).catch(() => toast.update(load, ));

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
          api.defaults.headers.authorization = `Bearer ${token}`;
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
      value={{ user, setUser, loading, register, signIn, removeTech, focus, setFocus }}
    >
      <SwitchProvider>{children}</SwitchProvider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
