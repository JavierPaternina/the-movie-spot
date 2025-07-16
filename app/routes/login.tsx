import { verifyLogin } from '@/.server/auth/check-login';
import { createUserSession, getUser } from '@/.server/auth/user-session';
import { LoginPage } from '@/pages/login';
import { LOGIN } from '@/shared/constant/login';
import { useAuthUser } from '@/shared/hooks';
import { TAuthErrors } from '@/shared/types';
import { json, type ActionFunctionArgs, type LoaderFunctionArgs, type MetaFunction } from '@remix-run/node';
import { useActionData, useLoaderData } from '@remix-run/react';
import { useEffect } from 'react';

export const meta: MetaFunction = () => {
	return [{ title: 'The Movie Spot - Login' }, { name: 'description', content: 'Login to your account' }];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const user = await getUser(request);
	if (user) {
		throw new Response('', { status: 302, headers: { Location: '/' } });
	}
	return { isAuthenticated: false };
};

export const action = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData();
	const email = formData.get('email')?.toString();
	const password = formData.get('password')?.toString();

	const errors: TAuthErrors = {};

	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		errors.email = 'Please enter a valid email address';
	}

	if (!password || password.length < 6) {
		errors.password = 'Password must be at least 6 characters long';
	}

	if (Object.keys(errors).length > 0) {
		return json({ errors }, { status: 400 });
	}

	const user = await verifyLogin(email!, password!);
	if (!user) {
		errors.general = 'Invalid email or password';
		return json({ errors }, { status: 400 });
	}

	return createUserSession(user);
};

export default function Login() {
	const { isAuthenticated } = useLoaderData<{ isAuthenticated: boolean }>();
	const errors = useActionData<{ errors: TAuthErrors | { [key: string]: string } }>()?.errors;
	const config = LOGIN.LOGIN_FORM;
	// This is the main entry point for the login page
	// It sets the configuration for the login form and handles authentication state
	const { setLoginConfig, setIsAuthenticated, setLoginErrors } = useAuthUser();

	useEffect(() => {
		setLoginConfig(config);
		setIsAuthenticated(isAuthenticated);
	}, []);

	useEffect(() => {
		setLoginErrors(errors || {});
	}, [errors]);

	return <LoginPage />;
}
