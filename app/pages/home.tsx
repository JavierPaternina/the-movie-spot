import { MediaList, SectionTitle, Slider } from '@Components';
import { useTrendingHome } from '@Hooks';
import { TMediaInfo } from '@Types';
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
