import { Login, LoginIcon } from '@Components';
import React from 'react';

export const RegisterPage: React.FC = () => {
	return (
		<div className="relative flex flex-col items-center mt-200 sm:mt-300 w-full h-full">
			<LoginIcon />
			<Login />
		</div>
	);
};

export default RegisterPage;
