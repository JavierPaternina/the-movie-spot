import { MEDIA_TYPE } from "@/shared/constant/media-type";
import { TMediaInfo } from "@Types";
import { useEffect, useState } from "react";

export const useTrendingHome = (trending: TMediaInfo[]) => { 
    const [trendingInfo, setTrendingInfo] = useState<TMediaInfo[]>([]);
    const [recommended, setRecommended] = useState<TMediaInfo[]>([]);    
    // Ensure trending is an array and has the expected structure

    useEffect(() => {
        if (trending.length) {
            const trendingSlicer = trending.filter((item) => item.media_type === MEDIA_TYPE.Movie || item.media_type === MEDIA_TYPE.TV).slice(0, 5);
            setTrendingInfo(trendingSlicer);
            const recommendedMedia = trending.filter((item) => item.media_type === MEDIA_TYPE.Movie || item.media_type === MEDIA_TYPE.TV).slice(5, 20);
            setRecommended(recommendedMedia);
        } else {
            console.error("No trending data available");
        }
    }, [trending]);

    return { trendingInfo, recommended };
};