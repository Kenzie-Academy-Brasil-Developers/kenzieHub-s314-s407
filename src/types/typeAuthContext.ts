import { DeepRequired, FieldErrorsImpl, FieldValues } from "react-hook-form";

export interface IAuthProvider {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  loading: boolean;
  // prettier-ignore
  register: ({ name, email, password, bio, contact, course_module }: IRegisterRequest) => Promise<void>;
  signIn: (data: ILoginRequest) => Promise<void>;
  removeTech: () => Promise<void>;
  focus: ITech;
  setFocus: React.Dispatch<React.SetStateAction<ITech>>;
}

export interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string | null;
}

export interface IWork {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  user: { id: IUser["id"] };
  created_at: string;
  updated_at: string | null;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITech[];
  works: IWork[];
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
}

export interface IRegisterRequest {
  name?: string;
  email?: string;
  password?: string;
  password_confirm?: string;
  bio?: string;
  contact?: string;
  course_module?: string;
  errors?: FieldErrorsImpl<DeepRequired<FieldValues>>;
}

export interface IRegisterResponse {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
}

export interface ILoginRequest {
  email?: string;
  password?: string;
  errors?: FieldErrorsImpl<DeepRequired<FieldValues>>;
}

export interface ILoginResponse {
  user: IUser;
  token: string;
}

export interface IStateType {
  from: { pathname: string };
}
