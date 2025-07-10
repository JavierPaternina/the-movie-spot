// import { isRouteErrorResponse, useMatches, useRouteError, useRouteLoaderData } from '@remix-run/react';

// export function ErrorBoundary() {
// 	const error = useRouteError();
// 	const matches = useMatches();
// 	const currentRoute = matches ? matches[matches?.length - 1].id : 'root';
// 	const data = useRouteLoaderData(currentRoute);
// 	const debug = process.env.NODE_ENV === 'development';

// 	// when true, this is what used to go to `CatchBoundary`
// 	if (isRouteErrorResponse(error)) {
// 		if (debug) {
// 			console.error('Route Error:', error);
// 		}
// 		return (
// 			<div className="flex flex-col items-center justify-center min-h-screen text-center">
// 				<h1 className="text-2xl font-bold">Oops!</h1>
// 				<p className="mt-4">Something went wrong.</p>
// 				<p className="mt-2 text-sm text-gray-500">
// 					{error.status} - {error.statusText}
// 				</p>
// 			</div>
// 		);
// 	}
// 	return (
// 		<div className="flex flex-col items-center justify-center min-h-screen text-center">
// 			Oh-oh! It seems this page has encountered with a unexpected error and the page fail to load.
// 		</div>
// 	);
// }
