import React from 'react';
import { SidebarOptions } from './sidebar.model';

const SidebarNavItem: React.FC<{ label: string; href: string }> = ({ label, href }) => {
	return (
		<a
			key={label}
			href={href}
			className="flex items-center gap-2 text-gray-700 hover:text-blue-700 size-[16px] sm:size-[20px]"
		>
			<img src={href} alt={label} />
		</a>
	);
};
const SidebarNav: React.FC = () => {
	return (
		<nav className="flex-auto flex lg:flex-col lg:gap-[2vw] gap-[4vw] justify-center  lg:justify-start align-center">
			{SidebarOptions.map((option) => (
				<SidebarNavItem key={option.label} label={option.label} href={option.href} />
			))}
		</nav>
	);
};

export default SidebarNav;
