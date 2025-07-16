import { TSvgIconsProps } from '@/shared/types';
import { NavLink } from '@remix-run/react';
import React from 'react';
import { SidebarOptions } from './sidebar.model';

const SidebarNavItem: React.FC<{ label: string; href: string; icon: React.FC<TSvgIconsProps> }> = ({
	label,
	href,
	icon,
}) => {
	return (
		<NavLink
			key={label}
			to={href}
			prefetch="viewport"
			className="flex items-center gap-2 text-gray-700 hover:text-blue-700"
		>
			{({ isActive }) =>
				icon({
					className: `size-[16px] sm:size-[20px] hover:fill-red-500 ${isActive ? 'fill-white' : 'fill-blue-500'}`,
				})
			}
		</NavLink>
	);
};

const SidebarNav: React.FC = () => {
	return (
		<nav className="flex-auto flex lg:flex-col lg:gap-[2vw] gap-[6vw] sm:gap-[4vw] justify-center  lg:justify-start align-center">
			{SidebarOptions.map((option) => (
				<SidebarNavItem key={option.label} label={option.label} href={option.href} icon={option.icon} />
			))}
		</nav>
	);
};

export default SidebarNav;
