import { redirect } from 'react-router-dom';
export const loader = async () => {
	return redirect('/home');
};
