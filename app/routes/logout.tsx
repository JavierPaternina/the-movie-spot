import { logout } from '@/.server/auth/check-login';
import type { ActionFunctionArgs } from '@remix-run/node';

export const action = async ({ request }: ActionFunctionArgs) => {
	return logout(request);
};
