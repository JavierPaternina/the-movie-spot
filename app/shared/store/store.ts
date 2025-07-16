import { create } from "zustand";
import { AuthStorage } from "./auth-store";
import { TAuthContext } from "./auth-store.model";


const movieSpotStore = create<TAuthContext>((...s) => ({
    ...AuthStorage(...s),
}));
export { movieSpotStore };
