import type { MetaFunction } from '@remix-run/node';
import { HomePage } from '../pages/home';

export const meta: MetaFunction = () => {
	return [{ title: 'The Movie Spot' }, { name: 'description', content: 'Welcome to the movie spot' }];
};

export default function Index() {
	return <HomePage />;
}
