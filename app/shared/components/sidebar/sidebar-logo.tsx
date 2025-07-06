import { LOGO } from './sidebar.model';

const SideBarLogo: React.FC = () => {
	return (
		<div className="flex lg:flex-0 text-xl size-[25px] sm:size-[32px] ">
			<img src={LOGO.href} alt={LOGO.label} />
		</div>
	);
};
export default SideBarLogo;
