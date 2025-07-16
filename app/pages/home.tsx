import { useTrendingHome } from '@/shared/hooks';
import { TMediaInfo } from '@/shared/types';
import { MediaList, SectionTitle, Slider } from '@Components';
import React from 'react';
export const HomePage: React.FC<{ data: TMediaInfo[] }> = ({ data }) => {
	const { trendingInfo, recommended } = useTrendingHome(data);
	return (
		<div className="flex flex-col h-full w-full gap-300">
			<SectionTitle>Trending</SectionTitle>
			<Slider sliderData={trendingInfo} />
			<SectionTitle>Recommended For you</SectionTitle>
			<MediaList mediaData={recommended} />
		</div>
	);
};
