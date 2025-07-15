import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";


type BookmarkResponse = { success?: boolean };

export const useBookmarkAction = (mediaId: string | number) => {
    const [isBookMarked, setIsBookMarked] = useState(false);
    const fetcher = useFetcher<BookmarkResponse>();
    const onBookmarkClick = () => {
        if (fetcher.state === "submitting") return; // Prevent multiple clicks
    fetcher.submit(
        { bookmarkId: mediaId },
        { method: "post", action: `/bookmark-action` }
    );
        // Handle bookmark click logic here, e.g., save to local storage or API
    };

    useEffect(() => {
        if (fetcher.data && fetcher.data.success) {
            setIsBookMarked(true);
        }
    }, [fetcher.data, mediaId]);

    return { isBookMarked, onBookmarkClick };
};