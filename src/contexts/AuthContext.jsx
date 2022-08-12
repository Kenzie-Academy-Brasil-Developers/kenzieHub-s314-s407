import { useContext } from "react";
import { createContext, useState } from "react";
import api from "../services/api";
import { NotificationContext } from "./NotificationContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const { updateToast, toast, baseSettings } = useContext(NotificationContext);
  const location = useLocation();
  const navigate = useNavigate();

  const signIn = async (data) => {
    const load = toast.loading("Solicitação em andamento...", baseSettings);
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

  const register = async ({
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

    const load = toast.loading("Solicitação em andamento...", baseSettings);
    const response = await api.post("/users", options).catch(() =>
      toast.update(load, {
        render: "Este email já está em uso",
        type: "error",
        isLoading: false,
        ...baseSettings,
      })
    );

    if (response) {
      toast.update(load, {
        render: "Conta criada com sucesso",
        type: "success",
        isLoading: false,
        ...baseSettings,
      });
      navigate("/login");
    }
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
    <AuthContext.Provider value={{ user, register, signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
