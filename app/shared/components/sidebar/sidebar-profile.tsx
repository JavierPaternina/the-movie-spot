// export default Profile;
import { useAuthUser } from '@/shared/hooks';
import React from 'react';
import { LoginButton } from './sidebar-login';
import { LogoutMenu } from './sidebar-logout-menu';

export const Profile: React.FC = () => {
	const { isAuthenticated } = useAuthUser();
	return (
		<>
			{!isAuthenticated && <LoginButton />}
			{isAuthenticated && <LogoutMenu />}
		</>
	);
};
