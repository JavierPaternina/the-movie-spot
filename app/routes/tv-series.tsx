import type { MetaFunction } from '@remix-run/node';
import { TvSeriesPage } from '../pages/tv-series';

export const meta: MetaFunction = () => {
	return [{ title: 'The Movie spot - Tv Series' }, { name: 'TV Series ', content: 'Welcome to Tv series' }];
};

export default function Index() {
	return <TvSeriesPage />;
}
