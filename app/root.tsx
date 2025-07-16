import { getUser } from '@/.server/auth/user-session';
import { LOGIN } from '@/shared/constant/login';
import { TUser } from '@/shared/store/auth-store.model';
import { SearchBar, Sidebar } from '@Components';
import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, useLocation } from '@remix-run/react';
import { useEffect } from 'react';
import { getBookmarksByUserId } from './.server/services/set-bookmark';
import './app.css';
import { useAuthUser, useBookmarksContext } from './shared/hooks';
import { TBookmark } from './shared/store/bookmarks-store';
import { TMediaInfo } from './shared/types';

export const links: LinksFunction = () => [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'icon',
		href: './favicon.svg',
		type: 'image/svg+xml',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap',
	},
];
export const loader = async ({ request }: LoaderFunctionArgs) => {
	const user = await getUser(request);
	const isAuthenticated = !!user;
	if (user) {
		const bookmarks = await getBookmarksByUserId(user?.id);
		return {
			isAuthenticated,
			user: null,
			bookmarks: bookmarks.map((b) => ({ id: b.id?.toString(), media: b.media as TMediaInfo })) as TBookmark[],
		};
	}
	return { isAuthenticated, user, bookmarks: [] as TBookmark[] };
};
export function Layout({ children }: { children: React.ReactNode }) {
	const location = useLocation();
	const isLoginPage = location.pathname === LOGIN.LOGIN_FORM.linkTo || location.pathname === LOGIN.REGISTER_FORM.linkTo;
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="flex flex-col lg:flex-row min-h-screen text-gray-900 antialiased  bg-blue-950 h-screen w-screen  p-0 lg:gap-100">
				{!isLoginPage && (
					<section className="flex flex-col sm:p-200">
						<Sidebar />
					</section>
				)}
				<section className="flex flex-col h-full w-full lg:pt-700 px-200 lg:px-0 mb-100 pt-200  overflow-y-auto overflow-x-hidden scroll-y-smooth ">
					{!isLoginPage && <SearchBar />}
					{children}
				</section>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	const { isAuthenticated, user, bookmarks } = useLoaderData<{
		isAuthenticated: boolean;
		user: TUser | null;
		bookmarks: TBookmark[];
	}>();
	const { setIsAuthenticated, setUser } = useAuthUser();
	const { addBookmarks } = useBookmarksContext();
	useEffect(() => {
		setIsAuthenticated(isAuthenticated);
		setUser(user);
		addBookmarks(bookmarks);
	}, [bookmarks]);

	return <Outlet />;
}
