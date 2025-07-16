import { TLogin, TRegister } from "@/shared/constant/login";

export interface TAuthErrors {
  email?: string;
  password?: string;
  username?: string;
  general?: string;
}
export interface TAuthForm {
  email: string;
  password: string;
  username?: string;
}
export type TUser = {
  id: string; 
  email: string;
  username: string;
  password: string;
};
// Define the context for authentication state
// This includes user information, authentication status, and methods to update the state.
export type TAuthContext = {
  user: TUser | null | undefined;
  isAuthenticated: boolean;
  loginConfig: TLogin | TRegister;
  loginErrors?: TAuthErrors;
  setUser: (user: TUser | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setLoginConfig: (config: TLogin | TRegister) => void;
  setLoginErrors: (errors: TAuthErrors) => void;
};