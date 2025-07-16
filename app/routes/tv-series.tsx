import { getTvShows } from '@/.server/api/api-calls';
import { TvSeriesPage } from '@/pages/tv-series';
import { MEDIA_TYPE } from '@/shared/constant/media-type';
import { useBookmarksContext } from '@/shared/hooks';
import { TMediaInfo } from '@/shared/types';
import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useEffect } from 'react';

export const meta: MetaFunction = () => {
	return [{ title: 'The Movie spot - Tv Series' }, { name: 'TV Series ', content: 'Welcome to Tv series' }];
};
export const loader = async () => {
	// This is where you can fetch data if needed
	// For now, we are just returning an empty object
	const tvShowsRaw = await getTvShows();
	if (!tvShowsRaw || !Array.isArray(tvShowsRaw)) {
		throw new Error('Failed to fetch TV shows');
	}
	// Map the TV shows to include media_type
	const tvShows = tvShowsRaw.map(
		(tvShow: TMediaInfo) =>
			({
				...tvShow,
				media_type: MEDIA_TYPE.TV,
			} as TMediaInfo)
	);
	return { tvShows };
};
export default function Index() {
	const { tvShows } = useLoaderData<{ tvShows: TMediaInfo[] }>();
	// This is the main entry point for the TV Series page
	// This hook is used to handle bookmark actions
	// It sets the possible bookmarks based on the fetched TV shows
	const { setPossibleBookmarks } = useBookmarksContext();
	useEffect(() => {
		setPossibleBookmarks(tvShows);
	}, [tvShows]);

	return <TvSeriesPage tvShows={tvShows} />;
}
