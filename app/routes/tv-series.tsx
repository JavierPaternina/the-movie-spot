import { getTvShows } from '@/.server/api/api-calls';
import { TvSeriesPage } from '@/pages/tv-series';
import { MEDIA_TYPE } from '@/shared/constant/media-type';
import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { TMediaInfo } from '@Types';

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
	return <TvSeriesPage tvShows={tvShows} />;
}
