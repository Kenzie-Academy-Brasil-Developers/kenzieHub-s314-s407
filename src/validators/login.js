import * as yup from "yup"

const loginSchema = yup.object().shape({
    email: yup.string().required("Insira seu endereço de email."),
    password: yup.string().required("Insira sua senha.")
})

export default loginSchema;