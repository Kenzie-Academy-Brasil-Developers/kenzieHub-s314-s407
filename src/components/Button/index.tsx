import { IButtonProps } from "../../types/typeComponents";
import { PrimaryButton, SecondaryButton } from "./styles";

const Button = ({ buttonStyle, children, handler, submit = false }: IButtonProps) =>
  buttonStyle === "primary" ? (
    <PrimaryButton onClick={handler} buttonType={submit} type={submit ? "submit" : undefined}>{children}</PrimaryButton>
  ) : (
    <SecondaryButton onClick={handler} >{children}</SecondaryButton>
  );

export default Button;
