
import { TAuthContext } from "@/shared/store/auth-store.model";
import { movieSpotStore } from "@/shared/store/store";

export function useAuthUser (): TAuthContext {
  // Access the store directly to get the required properties and methods
  // This avoids the need to destructure the store in every component
  const store = movieSpotStore((state) => state);
  return {
    loginConfig: store.loginConfig,
    isAuthenticated: store.isAuthenticated,
    loginErrors: store.loginErrors,
    user: store.user,
    setUser: store.setUser,
    setIsAuthenticated: store.setIsAuthenticated,
    setLoginConfig: store.setLoginConfig,
    setLoginErrors: store.setLoginErrors
  };
}