import { LogoIcon } from '@/shared/svg';
import { Link } from '@remix-run/react';

export const LoginIcon: React.FC = () => {
	return (
		<div className="p-4 mb-500">
			<Link to={'/home'} className="flex items-center justify-center">
				<LogoIcon className="size-[32px] sm:size-[42px] fill-red-500" />
			</Link>
		</div>
	);
};
export default LoginIcon;
