import { getSearchResults } from '@/.server/api/api-calls';
import { SearchPage } from '@/pages/search';
import { MEDIA_TYPE } from '@/shared/constant/media-type';
import { TMediaInfo } from '@/shared/types';
import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
export const loader = async ({ request }: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	const query = url.searchParams.get('search') || '';
	if (!query) {
		// If no query is provided, return an empty formattedResults array for consistency
		return { formattedResults: [] };
	}

	const searchResults = await getSearchResults(query);
	if (!searchResults || !Array.isArray(searchResults)) {
		return { formattedResults: [] };
	}
	// Map the results to ensure they have the correct media_type
	const formattedResults = searchResults.filter(
		(result) =>
			((result.media_type === MEDIA_TYPE.Movie || result.media_type === MEDIA_TYPE.TV) && result.backdrop_path) ||
			result.poster_path
	);

	return { formattedResults };
};

export default function SearchRoute() {
	const { formattedResults } = useLoaderData<{ formattedResults: TMediaInfo[] }>();
	return <SearchPage searchResults={formattedResults} />;
}
