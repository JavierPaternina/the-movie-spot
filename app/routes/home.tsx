import { getTrending } from '@/.server/api/api-calls';
import { HomePage } from '@/pages/home';
import { useBookmarksContext } from '@/shared/hooks';
import { TMediaInfo } from '@/shared/types';
import { LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useEffect } from 'react';

export const meta: MetaFunction = () => {
	return [{ title: 'The Movie Spot' }, { name: 'description', content: 'Welcome to the movie spot' }];
};
export const loader: LoaderFunction = async () => {
	const trending = await getTrending();
	return { trending };
};
export default function Index() {
	const { trending } = useLoaderData<{ trending: TMediaInfo[] }>();
	// This is the main entry point for the application
	// This hook is used to handle bookmark actions
	const { setPossibleBookmarks } = useBookmarksContext();
	useEffect(() => {
		setPossibleBookmarks(trending);
	}, [trending]);

	return <HomePage data={trending} />;
}
