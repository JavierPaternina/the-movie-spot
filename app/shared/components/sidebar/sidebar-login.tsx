import { LoginIcon } from '@/shared/svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const LoginButton: React.FC = () => {
	return (
		<motion.div
			className="flex items-center justify-center"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			transition={{ duration: 0.3 }}
		>
			<motion.div className="flex flex-col items-center justify-center w-10 h-10 hover:bg-blue-900 transition-colors duration-200">
				<Link to="/login" className="flex items-center justify-center w-full h-full">
					<LoginIcon className="w-5 h-5 mr-3 text-blue-500 m-auto hover:text-red-500" />
				</Link>
			</motion.div>
		</motion.div>
	);
};
