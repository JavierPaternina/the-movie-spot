import { TLogin, TRegister } from '@/shared/constant/login';
import { Link } from '@remix-run/react';
import React from 'react';

export const LoginFooter: React.FC<{ Type: TLogin | TRegister }> = ({ Type }) => {
	return (
		<div className="flex justify-center  mt-400 gap-2">
			<p className="text-preset-4 text-white">{Type.footerText}</p>
			<Link to={Type.linkTo} className="text-preset-4 text-red-500">
				{Type.linkText}
			</Link>
		</div>
	);
};
