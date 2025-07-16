
import { TLogin, TRegister } from "@/shared/constant/login";
import { StateCreator } from "zustand";
import { TAuthContext, TAuthErrors, TUser } from "./auth-store.model";


export const AuthStorage: StateCreator<TAuthContext> = (set) => ({
  user: null,
  isAuthenticated: false,
  loginConfig: {} as TLogin | TRegister,
  loginErrors: undefined,
  setUser: (user: TUser | null) => set(() => ({ user })),
  setIsAuthenticated: (isAuthenticated: boolean) => set(() => ({ isAuthenticated })),
  setLoginConfig: (config: TLogin | TRegister) => set(() => ({ loginConfig: config })),
  setLoginErrors: (errors: TAuthErrors) => set(() => ({ loginErrors: errors })),
});