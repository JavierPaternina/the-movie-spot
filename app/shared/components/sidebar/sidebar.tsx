import React from 'react';
import SideBarLogo from './sidebar-logo';
import SidebarNav from './sidebar-nav';
import Profile from './sidebar-profile';

const Sidebar: React.FC = () => {
	return (
		<div className="flex justify-between lg:flex-col items-center gap-[8vw] p-7 min-w-full lg:w-[96px] bg-blue-900 sm:rounded-lg lg:rounded-xl lg:h-screen sm:h-[72px] h-[56px]">
			{/* Logo */}
			<SideBarLogo />
			{/* Navigation */}
			<SidebarNav />
			{/* Profile */}
			<Profile />
		</div>
	);
};

export default Sidebar;
