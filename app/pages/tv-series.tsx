import { TMediaInfo } from '@/shared/types';
import { MediaList, SectionTitle } from '@Components';
import React from 'react';
export const TvSeriesPage: React.FC<{ tvShows: TMediaInfo[] }> = ({ tvShows }) => {
	return (
		<div className="flex flex-col h-full w-full gap-300">
			<SectionTitle>Tv Series</SectionTitle>
			<MediaList mediaData={tvShows} />
		</div>
	);
};
