import { create } from "zustand";
import { AuthStorage } from "./auth-store";
import { TAuthContext } from "./auth-store.model";
import { BookmarkStorage, TBookmarkContext } from "./bookmarks-store";


const movieSpotStore = create<TAuthContext & TBookmarkContext>((...s) => ({
    ...AuthStorage(...s),
    ...BookmarkStorage(...s),
}));
export { movieSpotStore };

