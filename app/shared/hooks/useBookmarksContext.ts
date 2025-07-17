import { movieSpotStore } from "../store/store";

export const useBookmarksContext = () => {
    // Access the store directly to get the required properties and methods
    
  const store = movieSpotStore((state) => state);
  return {
        bookmarks: store.bookmarks,
        addBookmarks: store.addBookmarks,
        removeBookmark: store.removeBookmark,
        setPossibleBookmarks: store.setPossibleBookmarks,
        possibleBookmarks: store.possibleBookmarks,
    };
};