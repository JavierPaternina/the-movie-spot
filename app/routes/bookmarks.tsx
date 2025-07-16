import { getUser } from '@/.server/auth/user-session';
import { BookmarksPage } from '@/pages/bookmarks';
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [{ title: 'The Movie spot - Bookmarks' }, { name: 'Bookmarks ', content: 'Welcome to Bookmarks' }];
};
export const loader = async ({ request }: LoaderFunctionArgs) => {
	const user = await getUser(request);
	if (!user) {
		throw new Response('', { status: 302, headers: { Location: '/login' } });
	}
	return { isAuthenticated: true, user };
};
export default function Index() {
	return <BookmarksPage />;
}
