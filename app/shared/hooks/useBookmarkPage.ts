import { useEffect, useState } from "react";
import { MEDIA_TYPE } from "../constant/media-type";
import { TMediaInfo } from "../types";
import { useBookmarksContext } from "./useBookmarksContext";


export const useBookmarkPage = () => {
    const { bookmarks } = useBookmarksContext();
    // Assuming you have a way to get the user, e.g., from context or props
    const [bookmarksTV, setBookmarksTV] = useState<TMediaInfo[]>([]);
    const [bookmarksMovies, setBookmarksMovies] = useState<TMediaInfo[]>([]);


    useEffect(() => {
        if (bookmarks && bookmarks.length > 0) {
            const tvShows = bookmarks.filter((item) => item.media.media_type === MEDIA_TYPE.TV).map((item) => item.media);
            const movies = bookmarks.filter((item) => item.media.media_type === MEDIA_TYPE.Movie).map((item) => item.media);
            setBookmarksTV(tvShows);
            setBookmarksMovies(movies); 
        }
    }, [bookmarks]);

    return { bookmarksTV, bookmarksMovies };
};
