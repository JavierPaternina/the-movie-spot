import { MediaList, SectionTitle } from '@Components';
import { TMediaInfo } from '@Types';
import React from 'react';
export const MoviesPage: React.FC<{ movies: TMediaInfo[] }> = ({ movies }) => {
	return (
		<div className="flex flex-col h-full w-full gap-300">
			<SectionTitle>Movies</SectionTitle>
			<MediaList mediaData={movies} />
		</div>
	);
};
