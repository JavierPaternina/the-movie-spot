import { CARD_MODE } from '@/shared/constant/card-constant';
import { useCardData } from '@/shared/hooks';
import { TMediaInfo } from '@/shared/types';
import { CardDescription, CardImage } from '@Components';
import React, { memo } from 'react';

interface MediaContentItemProps {
	item: TMediaInfo;
}

const MediaContentItemComponent: React.FC<MediaContentItemProps> = ({ item }) => {
	const { descriptionCard, imageCard } = useCardData(item, CARD_MODE.Media);
	// The MediaContentItem component is used to display media items in a grid format.
	return (
		<div className="flex flex-col h-[158px] sm:h-[195px] lg:h-[230px] gap-1 sm:gap-0 ">
			<div className="w-full h-[110px]  sm:h-[140px] lg:h-[174px] rounded-lg">
				<CardImage info={imageCard} />
			</div>
			<CardDescription description={descriptionCard} />
		</div>
	);
};

export const MediaContentItem = memo(MediaContentItemComponent, (prevProps, nextProps) => {
	return prevProps.item.id === nextProps.item.id;
});

export default MediaContentItem;
