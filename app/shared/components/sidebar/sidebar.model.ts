
// Sidebar model for The Movie Spot application.
// This file defines the logo and sidebar options used in the application.
import { BookmarksIcon, HomeIcon, MoviesIcon, SvgIcons, TvShowsIcon } from '../../svg/nav-bar';

const SidebarOptions: {
	label: string;
	icon:  React.FC<SvgIcons> ;
	href: string;
}[] = [
	{
		label: 'Home',
		icon:  HomeIcon ,
		href: './'
	},
	{
		label: 'Movies',
		icon: MoviesIcon ,
		href: './movies'
	},
	{
		label: 'Shows',
		icon: TvShowsIcon ,
		href: './tv-series'
	},
	{
		label: 'Bookmarks',
		icon: BookmarksIcon,
		href: './bookmarks'
	},
];

export { SidebarOptions };

