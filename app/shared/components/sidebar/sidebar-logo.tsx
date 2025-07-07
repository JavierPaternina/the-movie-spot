import { LogoIcon } from '../../svg/nav-bar';

const SideBarLogo: React.FC = () => {
	return (
		<div className="flex lg:flex-0 text-xl size-[25px] sm:size-[32px] ">
			<LogoIcon className="fill-red-500" />
		</div>
	);
};
export default SideBarLogo;
