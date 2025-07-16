import { useAuthUser } from '@/shared/hooks';
import React from 'react';
import { SectionTitle } from '../section-title';
import { LoginFooter } from './login-footer';
import { LoginForm } from './login-form';
export const Login: React.FC = () => {
	const { loginConfig } = useAuthUser();
	const { CSS, isLoginForm } = loginConfig || {};
	const { loginForm, registerForm } = CSS || {};

	return (
		<div
			className={`flex flex-col justify-start bg-blue-900  p-300 w-[327px] ${
				isLoginForm ? loginForm : registerForm
			} sm:w-[400px] rounded-3xl `}
		>
			<SectionTitle>{loginConfig?.title}</SectionTitle>
			<LoginForm />
			<LoginFooter Type={loginConfig} />
		</div>
	);
};
