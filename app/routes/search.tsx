import { getSearchResults } from '@/api/api-calls';
import { SearchPage } from '@/pages/search';
import { MEDIA_TYPE } from '@/shared/constant/media-type';
import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { TMediaInfo } from '@types';
export const loader = async ({ request }: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	const query = url.searchParams.get('search') || '';
	if (!query) {
		// If no query is provided, you might want to handle it differently
		// For example, you could return an empty array or throw an error
		return { searchResults: [] };
	}

	const searchResults = await getSearchResults(query);
	if (!searchResults || !Array.isArray(searchResults)) {
		return { searchResults: [] };
	}
	// Map the results to ensure they have the correct media_type
	const formattedResults = searchResults.filter(
		(result) => result.media_type === MEDIA_TYPE.Movie || result.media_type === MEDIA_TYPE.TV
	);

	return { formattedResults };
};

export default function SearchRoute() {
	const { formattedResults } = useLoaderData<{ formattedResults: TMediaInfo[] }>();
	return <SearchPage searchResults={formattedResults} />;
}
