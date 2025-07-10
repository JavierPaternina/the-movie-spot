import { getTrending } from '@/api/api-calls';
import { HomePage } from '@/pages/home';
import { LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { TMediaInfo } from '@Types';

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
	return <HomePage data={trending} />;
}
