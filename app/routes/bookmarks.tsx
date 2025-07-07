import type { MetaFunction } from '@remix-run/node';
import { BookmarksPage } from '../pages/bookmarks';

export const meta: MetaFunction = () => {
	return [{ title: 'The Movie spot - Bookmarks' }, { name: 'Bookmarks ', content: 'Welcome to Bookmarks' }];
};

export default function Index() {
	return <BookmarksPage />;
}
