import { CardDescription, CardImage } from '@Components';
import { useCardData } from '@Hooks';
import { TMediaInfo } from '@Types';
import React from 'react';
import { CARD_MODE } from '../../constant/card-constant';
export const SliderContentItem: React.FC<{ item: TMediaInfo }> = ({ item }) => {
	const { descriptionCard, imageCard } = useCardData(item, CARD_MODE.Slider);
	return (
		<div className="relative w-[240px] h-[140px] sm:w-[470px] sm:h-[230px] flex-shrink-0 rounded-lg">
			<CardImage info={imageCard} />
			<CardDescription description={descriptionCard} />
		</div>
	);
};
