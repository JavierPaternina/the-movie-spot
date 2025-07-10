import type { LinksFunction } from '@remix-run/node';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import './app.css';
import { SearchBar, Sidebar } from '@Components';

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

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="flex flex-col lg:flex-row min-h-screen text-gray-900 antialiased  bg-blue-950 h-screen w-screen  p-0 lg:gap-100">
				<section className="flex flex-col sm:p-200">
					<Sidebar />
				</section>
				<section className="flex flex-col h-full w-full lg:pt-700 px-200 lg:px-0 mb-100 pt-200  overflow-y-auto overflow-x-hidden scroll-y-smooth ">
					<SearchBar />
					{children}
				</section>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
