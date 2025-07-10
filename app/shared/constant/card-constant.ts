import { MoviesIcon, TvShowsIcon } from "@Svg";
import { TSvgIconsProps } from "@Types";

const CARD_MODE = {
    Slider: 'Slider',
    Media: 'Media',
} as const;

const IMG_SIZE = {
    Slider: '/w780',
    Media: '/w500',
} as const;

const IMG_URL = import.meta.env.VITE_IMAGE_URL;

const DESCRIPTION_OPTION: {
	[key: string]: { label: string; icon: React.FC<TSvgIconsProps>; }
} = {
	movie: {
		label: 'Movies',
		icon: MoviesIcon ,
	},
	tv:{
		label: 'Tv Series',
		icon: TvShowsIcon ,
	},
	
} as const;

 export { CARD_MODE, DESCRIPTION_OPTION, IMG_SIZE, IMG_URL };

