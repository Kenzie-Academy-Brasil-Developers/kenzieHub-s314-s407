import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup.string().required("Insira seu nome no formulário"),
  email: yup
    .string()
    .email("Formato de email inválido")
    .required("Insira seu email"),
  password: yup
    .string()
    .min(8, "A senha deve conter no mínimo 8 caracteres")
    .matches(
      /(^(?=.*?\d)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\W|_])).+$/,
      "Deve conter: letras maiúsculas, minúsculas, números e símbolo"
    ),
  password_confirm: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser idênticas"),
  bio: yup.string().required("Adicione uma breve biografia"),
  contact: yup
    .string()
    .required("Adicione um telefone para contato")
    .matches(
      /(\d{10,11}|\d{8,9})/,
      "O campo contato deve conter de 8 a 11 caracteres"
    ),
});

export default registerSchema;
