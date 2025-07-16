import { LogoIcon } from '@/shared/svg';

export const SideBarLogo: React.FC = () => {
	return (
		<div className="flex lg:flex-0">
			<LogoIcon className="size-[25px] sm:size-[32px] fill-red-500" />
		</div>
	);
};
export default SideBarLogo;
