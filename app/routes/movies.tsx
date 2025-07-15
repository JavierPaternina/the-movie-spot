import { getMovies } from '@/.server/api/api-calls';
import { MoviesPage } from '@/pages/movies';
import { MEDIA_TYPE } from '@/shared/constant/media-type';
import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { TMediaInfo } from '@Types';

export const meta: MetaFunction = () => {
	return [{ title: 'The Movie spot - Movies' }, { name: 'Movies ', content: 'Welcome to Movies' }];
};

export const loader = async () => {
	// This is where you can fetch data if needed
	// For now, we are just returning an empty object
	const moviesRaw = await getMovies();
	if (!moviesRaw || !Array.isArray(moviesRaw)) {
		throw new Error('Failed to fetch movies');
	}
	const movies = moviesRaw.map(
		(movie: TMediaInfo) =>
			({
				...movie,
				media_type: MEDIA_TYPE.Movie,
			} as TMediaInfo)
	);
	return { movies };
};
export default function Index() {
	const { movies } = useLoaderData<{ movies: TMediaInfo[] }>();
	return <MoviesPage movies={movies} />;
}
