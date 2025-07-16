import { TMediaInfo } from "@/shared/types";
import { StateCreator } from "zustand";

export type TBookmarkContext = {
  bookmarks: TBookmark[];
  possibleBookmarks: TMediaInfo[];
  addBookmarks: (bookmarks: TBookmark[]) => void;
  removeBookmark: (id: string | number) => void;
  setPossibleBookmarks: (bookmarks: TMediaInfo[]) => void;
};

export type TBookmark = {
  id: string | number;
  media: TMediaInfo;
};

// Define the context for bookmarks state
// This includes the list of bookmarks, methods to add/remove bookmarks, and possible bookmarks.
export const BookmarkStorage: StateCreator<TBookmarkContext> = (set) => ({
    bookmarks: [],
    possibleBookmarks: [],
    addBookmarks: (bookmarks: TBookmark[]) => set(() => ({ bookmarks: [ ...bookmarks] })),
    removeBookmark: (id: string | number) => set((state) => ({ bookmarks: state.bookmarks.filter((b) => b.id !== id) })),
    setPossibleBookmarks: (bookmarks: TMediaInfo[]) => set(() => ({ possibleBookmarks: bookmarks })),
});