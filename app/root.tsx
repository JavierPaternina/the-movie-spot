import type { LinksFunction } from '@remix-run/node';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import './app.css';
import Sidebar from './shared/components/sidebar/sidebar';

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
			<body className="flex flex-col lg:flex-row min-h-screen text-gray-900 antialiased bg-blue-950 h-screen w-screen overflow-hidden p-0">
				<section className="flex flex-col sm:p-6">
					<Sidebar />
				</section>
				<section className="flex flex-col min-h-screen min-w-screen lg:pt-[60px] px-4 sm:px-8">{children}</section>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
