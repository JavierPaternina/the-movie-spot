import { useFetcher, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { TBookmark } from "../store/bookmarks-store";
import { useAuthUser } from "./useAuthUserContext";
import { useBookmarksContext } from "./useBookmarksContext";


const BookmarkAction = {
    created: "created",
    deleted: "deleted"
} as const;
type BookmarkAction = typeof BookmarkAction[keyof typeof BookmarkAction];
type BookmarkResponse = { success?: boolean; action?: BookmarkAction; } | { success: false; error?: string; };
const bookmarkActionUrl = "/bookmark-action"; // Adjust this URL based on your routing
const bookmarkActionMethod = "post"; // Adjust this method if needed
const bookmarkIntent = {
    add: "add", 
    remove: "remove"
} as const;

export const useBookmarkAction = (mediaId: string | number) => {
    const { possibleBookmarks, bookmarks } = useBookmarksContext();
    const { isAuthenticated } = useAuthUser();
    const fetcher = useFetcher<BookmarkResponse>();  
    const [isBookMarked, setIsBookMarked] = useState<boolean>(false);
    const [currentBookmark, setCurrentBookmark] = useState<TBookmark | undefined>();
    // Check if the mediaId is already bookmarked
    const navigate = useNavigate();  
  
    useEffect(() => {
        // Check if the mediaId is already bookmarked
        const isAlreadyBookmarked = bookmarks.find((b) => b.media.id === mediaId);
        if (isAlreadyBookmarked) {
            setCurrentBookmark(isAlreadyBookmarked);
            setIsBookMarked(true);
        }
        
    }, [mediaId, bookmarks]);

    // Handle bookmark click
    // If user is not authenticated, redirect to login
    // If fetcher is already submitting, prevent multiple clicks
    // If fetcher data indicates success, update isBookMarked state
    const onBookmarkClick = () => {
         // Check if the fetcher is already submitting to prevent multiple clicks
        if (!isAuthenticated) {
                navigate("/login");
                return;
        }
        // If the current bookmark is not set, find it from possible bookmarks        
        const existingBookmark = currentBookmark ? currentBookmark : possibleBookmarks.find((b) => b.id === mediaId);
       

        if (fetcher.state === "submitting") return; // Prevent multiple clicks
        fetcher.submit(
            {
                bookmark: JSON.stringify(existingBookmark),
                intent: isBookMarked ? bookmarkIntent.remove : bookmarkIntent.add
            },
            {
                method: bookmarkActionMethod,
                action: bookmarkActionUrl
            }
        );
    };

    useEffect(() => {
        if (fetcher.data && fetcher.data.success) {
            const {action} = fetcher.data;
            setIsBookMarked(action === BookmarkAction.created ? true : false);
        } 
    }, [fetcher.data]);


    return { isBookMarked, onBookmarkClick };
};