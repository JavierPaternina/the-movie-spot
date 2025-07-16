import { useFetcher, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useAuthUser } from "./useAuthUserContext";


type BookmarkResponse = { success?: boolean };

export const useBookmarkAction = (mediaId: string | number ) => {
    const [isBookMarked, setIsBookMarked] = useState(false);
      const navigate = useNavigate();
    const { isAuthenticated } = useAuthUser();
    const fetcher = useFetcher<BookmarkResponse>();
  
    // Handle bookmark click
    // If user is not authenticated, redirect to login
    // If fetcher is already submitting, prevent multiple clicks
    // If fetcher data indicates success, update isBookMarked state
    const onBookmarkClick = () => {
        if (!isAuthenticated) {
                navigate("/login");
                return;
        }
        if (fetcher.state === "submitting") return; // Prevent multiple clicks
        fetcher.submit(
            { bookmarkId: mediaId },
            { method: "post", action: `/bookmark-action` }
        );
    };

    useEffect(() => {
        if (fetcher.data && fetcher.data.success) {
            setIsBookMarked(true);
        }
    }, [fetcher.data, mediaId]);

    return { isBookMarked, onBookmarkClick };
};