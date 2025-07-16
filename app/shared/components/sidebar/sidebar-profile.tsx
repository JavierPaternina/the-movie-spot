// export default Profile;
import { useAuthUser } from '@/shared/hooks';
import { LoginIcon, LogoutIcon, UserIcon } from '@/shared/svg';
import { Link, useFetcher } from '@remix-run/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

export const Profile: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { isAuthenticated } = useAuthUser();
	const fetcher = useFetcher();
	const menuRef = useRef<HTMLDivElement>(null);

	// Close menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleLogout = () => {
		fetcher.submit(null, { method: 'post', action: '/logout' });
		setIsOpen(false);
	};

	// Animation variants
	const menuVariants = {
		closed: {
			opacity: 0,
			y: -10,
			scale: 0.95,
			transition: {
				duration: 0.2,
				ease: [0.42, 0, 0.58, 1], // cubic-bezier for easeInOut
			},
		},
		open: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.2,
				ease: [0.42, 0, 1, 1], // cubic-bezier for easeOut
			},
		},
	};

	const itemVariants = {
		closed: { opacity: 0, x: -10 },
		open: (i: number) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: i * 0.05,
				duration: 0.2,
			},
		}),
	};

	if (!isAuthenticated) {
		return (
			<motion.div
				className=" rounded-full flex items-center justify-center "
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3 }}
			>
				<Link
					to="/login"
					className="flex justify-center items-center w-10 h-10  font-medium text-gray-700 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
				>
					<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="items-self-center w-full">
						<LoginIcon className="w-5 h-5 mr-3 text-gray-400" />
					</motion.div>
				</Link>
			</motion.div>
		);
	}

	return (
		<div ref={menuRef} className="relative">
			{/* Profile Button */}
			<motion.button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center justify-between w-full gap-1 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
			>
				<div className="flex items-center">
					<div className="flex-shrink-0">
						<div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
							<UserIcon className="w-5 h-5 text-white" />
						</div>
					</div>
				</div>
			</motion.button>

			{/* Dropdown Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						variants={menuVariants}
						initial="closed"
						animate="open"
						exit="closed"
						className="absolute  w-[150px] lg:bottom-full p-100 right-4 lg:right-0 lg:left-4 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
					>
						<div className="py-1">
							<motion.div custom={1} variants={itemVariants} initial="closed" animate="open">
								<Link
									to="/bookmarks"
									onClick={() => setIsOpen(false)}
									className="flex items-center  hover:bg-gray-100 hover:text-red-500  transition-colors duration-200"
								>
									<UserIcon className="w-4 h-4 mr-3 text-gray-400 fill-blue-900" /> bookmarks
								</Link>
							</motion.div>

							<motion.div
								custom={3}
								variants={itemVariants}
								initial="closed"
								animate="open"
								className="border-t border-gray-100"
							>
								<button
									onClick={handleLogout}
									className="z-10 flex items-center w-full group hover:bg-gray-100 hover:text-red-500 transition-colors duration-200 cursor-pointer"
								>
									<LogoutIcon className="w-4 h-4 mr-3 text-gray-400 fill-blue-900" /> Logout
								</button>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
