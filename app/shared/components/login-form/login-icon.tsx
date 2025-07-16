import { LogoIcon } from '@/shared/svg';
import { Link } from '@remix-run/react';

export const LoginIcon: React.FC = () => {
	return (
		<div className="absolute top-[5%]  p-4">
			<Link to={'/home'} className="flex items-center justify-center">
				<LogoIcon className="size-[32px] fill-red-500" />
			</Link>
		</div>
	);
};
export default LoginIcon;
