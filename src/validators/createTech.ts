import * as yup from "yup";

const createTechSchema = yup.object().shape({
  title: yup.string().required("Adicione uma nova tecnologia"),
});

export default createTechSchema;