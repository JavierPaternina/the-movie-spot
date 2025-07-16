import { TAuthErrors } from '@/.server/auth-types';
import { createUserSession, getUser } from '@/.server/auth/user-session';
import db from '@/.server/services/db';
import { createUser } from '@/.server/services/user';
import { RegisterPage } from '@/pages/register';
import { LOGIN } from '@/shared/constant/login';
import { useAuthUser } from '@/shared/hooks';
import { type ActionFunctionArgs, type LoaderFunctionArgs, type MetaFunction } from '@remix-run/node';
import { useActionData, useLoaderData } from '@remix-run/react';
import bcrypt from 'bcryptjs';
import { useEffect } from 'react';

export const meta: MetaFunction = () => {
	return [{ title: 'The Movie Spot - Register' }, { name: 'description', content: 'Create your account' }];
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
	const repeatPassword = formData.get('repeatPassword')?.toString();

	const errors: TAuthErrors = {};

	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		errors.email = 'Please enter a valid email address';
	}

	if (!password || password.length < 6) {
		errors.password = 'Password must be at least 6 characters long';
	}

	if (repeatPassword !== password) {
		errors.repeatPassword = 'Passwords do not match';
	}

	if (Object.keys(errors).length > 0) {
		return { errors };
	}

	// Check if user already exists
	const existingUser = await db.user.findFirst({
		where: {
			OR: [{ email: email! }],
		},
	});

	if (existingUser) {
		if (existingUser.email === email) {
			errors.email = 'A user with this email already exists';
		}

		return { errors };
	}

	try {
		const user = await createUser({ email: email!, password: bcrypt.hashSync(password!, 10) });
		return createUserSession(user);
	} catch (error) {
		errors.general = 'Something went wrong. Please try again.';
		return { errors };
	}
};

export default function Register() {
	const { isAuthenticated } = useLoaderData<{ isAuthenticated: boolean }>();
	const errors = useActionData<{ errors: TAuthErrors | { [key: string]: string } }>()?.errors;
	const config = LOGIN.REGISTER_FORM;
	// This is the main entry point for the registration page
	// It sets the configuration for the registration form and handles authentication state
	const { setLoginConfig, setIsAuthenticated, setLoginErrors } = useAuthUser();

	useEffect(() => {
		setLoginConfig(config);
		setIsAuthenticated(isAuthenticated);
		setLoginErrors(errors || {});
	}, []);

	useEffect(() => {
		setLoginErrors(errors || {});
	}, [errors]);

	return <RegisterPage />;
}
