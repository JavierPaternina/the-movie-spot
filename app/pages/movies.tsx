import { TMediaInfo } from '@/shared/types';
import { MediaList, SectionTitle } from '@Components';
import React from 'react';
export const MoviesPage: React.FC<{ movies: TMediaInfo[] }> = ({ movies }) => {
	return (
		<div className="flex flex-col h-full w-full gap-300">
			<SectionTitle>Movies</SectionTitle>
			<MediaList mediaData={movies} />
		</div>
	);
};
