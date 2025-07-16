
import { CARD_MODE, DESCRIPTION_OPTION, IMG_SIZE, IMG_URL } from '@/shared/constant/card-constant';
import { DescriptionModel, TCardDescription, TCardImage, TMediaInfo } from '@/shared/types';

export const useCardData = (item: TMediaInfo, mode:DescriptionModel) => { 
    const { title, backdrop_path, release_date, media_type, name ,first_air_date,poster_path } = item;
    const DescriptionOptions = DESCRIPTION_OPTION[media_type];
    const year = release_date || first_air_date ? new Date(release_date || first_air_date).getFullYear() : '-';
    const imageSize = mode === CARD_MODE.Slider ? IMG_SIZE.Slider : IMG_SIZE.Media;
    const titleName = title || name;
    // Create the image object
    const imageCard = {
            image:`${IMG_URL}${imageSize}${backdrop_path || poster_path}`,
            title: title,
            id: item.id,
    } as TCardImage

    // Create the description object
    const descriptionCard = {
            title: titleName,
            year,
            media: DescriptionOptions.label,
            MediaIcon: DescriptionOptions.icon,
            mode: mode,
    } as TCardDescription;

    return { descriptionCard, imageCard };
};