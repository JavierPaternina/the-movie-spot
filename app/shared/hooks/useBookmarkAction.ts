import { useState } from "react";


export const useBookmarkIcon = (mediaId:string | number) => {
    const [isBookMarked, setIsBookMarked] = useState(false);
    const onBookmarkClick = () => {
        setIsBookMarked(!isBookMarked);
        // Handle bookmark click logic here, e.g., save to local storage or API
        console.log('Bookmark clicked for media ID:', mediaId, 'Status:', !isBookMarked);
    };
    return { isBookMarked, onBookmarkClick };

};