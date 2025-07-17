import { getUser } from '@/.server/auth/user-session';
import { getBookmarksByUserId } from '@/.server/services/set-bookmark';
import { BookmarksPage } from '@/pages/bookmarks';
import { useBookmarksContext } from '@/shared/hooks/useBookmarksContext';
import { TMediaInfo } from '@/shared/types/trending';
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useEffect } from 'react';

export const meta: MetaFunction = () => {
	return [{ title: 'The Movie spot - Bookmarks' }, { name: 'Bookmarks ', content: 'Welcome to Bookmarks' }];
};
export const loader = async ({ request }: LoaderFunctionArgs) => {
	const user = await getUser(request);
	if (!user) {
		throw new Response('', { status: 302, headers: { Location: '/login' } });
	}
	// If you need to fetch bookmarks or other data, do it here
	// For example, you might want to fetch user bookmarks:
	const bookmarks = await getBookmarksByUserId(user.id);
	return { user, bookmarks: bookmarks.map((b) => ({ id: b.id?.toString(), media: b.media as TMediaInfo })) };
};
export default function Index() {
	const { user, bookmarks } = useLoaderData<typeof loader>();
	const { addBookmarks } = useBookmarksContext();
	// You can pass user and bookmarks to the BookmarksPage component
	// or use them directly in this component as needed.
	useEffect(() => {
		if (user) {
			addBookmarks(bookmarks);
		}
	}, [user, bookmarks, addBookmarks]);
	// Render the BookmarksPage component with the user

	return <BookmarksPage />;
}
