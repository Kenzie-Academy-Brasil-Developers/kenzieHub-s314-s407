import { FormHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { DeepRequired, FieldErrorsImpl, FieldValues, UseFormRegister } from "react-hook-form";
import { ISelectOptions } from "../components/Input/options";
import { IUser } from "./typeAuthContext";

export interface IButtonProps {
  buttonStyle?: string;
  children?: ReactNode;
  handler?: () => void;
  submit?: boolean;
}

export interface IFormulary extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegister<FieldValues>;
  error?: string;
  select?: boolean;
  options?: ISelectOptions[];
}

export interface IAddTechRequest {
  title?: string;
  status?: string;
  errors?: FieldErrorsImpl<DeepRequired<FieldValues>>;
}

export interface IAddTechResponse {
  id: string;
  title: string;
  status: string;
  user: {
    id: IUser["id"];
  };
  created_at: string;
  updated_at: string;
}

export interface IUpdateTechRequestModal {
  status?: string
}

export interface IGeneralProps {
  children: ReactNode;
}