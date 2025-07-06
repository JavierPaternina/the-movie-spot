// This file is part of the Movie Spot project.
// It is licensed under the MIT License.
const LOGO = { label: 'the-movie-spot', href: './sidebar/logo.svg' } as const;
 const SidebarOptions = [
	{ label: 'Home', href: './sidebar/home.svg' },
	{ label: 'Movies', href: './sidebar/movies.svg' },
	{ label: 'Shows', href: './sidebar/tvshows.svg' },
	{ label: 'Bookmarks', href: './sidebar/bookmarks.svg' },
] as const;

export { LOGO, SidebarOptions };
