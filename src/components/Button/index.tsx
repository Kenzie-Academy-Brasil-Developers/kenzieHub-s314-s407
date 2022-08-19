import { ReactNode } from "react";
import { PrimaryButton, SecondaryButton } from "./styles";

interface IButtonProps {
  buttonStyle?: string;
  children?: ReactNode;
  handler?: () => void;
  submit?: boolean;
}

const Button = ({ buttonStyle, children, handler, submit = false }: IButtonProps) =>
  buttonStyle === "primary" ? (
    <PrimaryButton onClick={handler} buttonType={submit} type={submit ? "submit" : undefined}>{children}</PrimaryButton>
  ) : (
    <SecondaryButton onClick={handler} >{children}</SecondaryButton>
  );

export default Button;
