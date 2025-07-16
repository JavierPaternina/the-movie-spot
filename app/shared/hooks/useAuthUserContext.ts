
import { TAuthContext } from "@/shared/store/auth-store.model";
import { movieSpotStore } from "@/shared/store/store";

export function useAuthUser (): TAuthContext {
  // Access the store directly to get the required properties and methods
  // This avoids the need to destructure the store in every component
  const loginConfig = movieSpotStore((state) => state.loginConfig);
  const isAuthenticated = movieSpotStore((state) => state.isAuthenticated);
  const loginErrors = movieSpotStore((state) => state.loginErrors);
  const user = movieSpotStore((state) => state.user);
  const setUser = movieSpotStore((state) => state.setUser);
  const setIsAuthenticated = movieSpotStore((state) => state.setIsAuthenticated);
  const setLoginConfig = movieSpotStore((state) => state.setLoginConfig);
  const setLoginErrors = movieSpotStore((state) => state.setLoginErrors);

  return { loginConfig, isAuthenticated, loginErrors, user, setUser, setIsAuthenticated, setLoginConfig, setLoginErrors };
}