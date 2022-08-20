import { SelectHTMLAttributes } from "react";

export interface IStyledButton {
  buttonType: boolean;
}

export interface IStyledInput extends SelectHTMLAttributes<HTMLSelectElement> {
  border: () => string;
}

export interface ILoadStyleProps {
  origin: number;
  size: number;
  color: string;
  duration: number;
  reverse?: string | boolean;
}
