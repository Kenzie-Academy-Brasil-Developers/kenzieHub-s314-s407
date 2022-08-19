import Form from "./styles";
import { ReactNode, FormHTMLAttributes } from "react"

interface IFormulary extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}

const Formulary = ({children, ...rest}: IFormulary) => (
  <Form {...rest}>
    {children}
  </Form>
);

export default Formulary;
