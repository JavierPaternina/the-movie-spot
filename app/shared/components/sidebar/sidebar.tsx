import React from 'react';
import SideBarLogo from './sidebar-logo';
import SidebarNav from './sidebar-nav';

const Sidebar: React.FC = () => {
	return (
		<div className="flex justify-between lg:flex-col items-center gap-[8vw] p-7 min-w-full lg:w-[96px] bg-blue-900 sm:rounded-xl lg:h-screen sm:h-[72px] h-[56px]">
			{/* Logo */}
			<SideBarLogo />
			{/* Navigation */}
			<SidebarNav />
			<div className="flex  justify-end flex h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10">
				<img className="rounded-full border border-white" src="./profile-test.jpg" alt="avatar"></img>
			</div>
		</div>
	);
};

export default Sidebar;
