import { BookmarksPage } from '@/pages/bookmarks';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [{ title: 'The Movie spot - Bookmarks' }, { name: 'Bookmarks ', content: 'Welcome to Bookmarks' }];
};

export default function Index() {
	return <BookmarksPage />;
}
