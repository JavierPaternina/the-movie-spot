
// Sidebar model for The Movie Spot application.
// This file defines the logo and sidebar options used in the application.
import { BookmarksIcon, HomeIcon, MoviesIcon, TvShowsIcon } from '@/shared/svg';
import { TSvgIconsProps } from '@/shared/types';

const SidebarOptions: {
	label: string;
	icon:  React.FC<TSvgIconsProps> ;
	href: string;
}[] = [
	{
		label: 'Home',
		icon:  HomeIcon ,
		href: './home'
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
] as const;

export { SidebarOptions };

