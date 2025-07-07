import type { MetaFunction } from '@remix-run/node';
import { MoviesPage } from '../pages/movies';

export const meta: MetaFunction = () => {
	return [{ title: 'The Movie spot - Movies' }, { name: 'Movies ', content: 'Welcome to Movies' }];
};

export default function Index() {
	return <MoviesPage />;
}
