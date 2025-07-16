import { TCardImage } from '@/shared/types';
import React from 'react';
import { CardBookmark } from './card-bookmark';
import { CardOverlayPlay } from './card-overlay-play';

export const CardImage: React.FC<{ info: TCardImage }> = ({ info }) => {
	return (
		<div className="w-full h-full relative flex-shrink-0 rounded-lg hover:scale-103 hover:brightness-100 transition duration-300">
			<img src={info.image} alt={info.title} className="w-full h-full object-cover rounded-lg" title={info.title} />
			<CardOverlayPlay
				onClick={() => {
					/* handle play click */
				}}
			/>
			<CardBookmark id={info.id} />
		</div>
	);
};
export default CardImage;
