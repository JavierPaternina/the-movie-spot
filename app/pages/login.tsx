import { Login, LoginIcon } from '@Components';
import React from 'react';

export const LoginPage: React.FC = () => {
	return (
		<div className="relative flex flex-col items-center justify-center w-full h-full">
			<LoginIcon />
			<Login />
		</div>
	);
};

export default LoginPage;
