import { useMenuActions } from '@/shared/hooks';
import { LogoutIcon, UserIcon } from '@/shared/svg';
import { Form } from '@remix-run/react';
import { AnimatePresence, motion } from 'framer-motion';

export const LogoutMenu: React.FC = () => {
	const { isOpen, toggleMenu, menuVariants, itemVariants, menuRef } = useMenuActions();

	return (
		<div ref={menuRef} className="relative">
			{/* Profile Button */}
			<motion.button
				className="group flex items-center justify-between  px-3 py-100 w-full bookmark-icon-container hover:bookmark-icon-container-hover"
				onClick={toggleMenu}
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
			>
				<div className="flex items-center">
					<div className="flex-shrink-0">
						<UserIcon className="bookmark-icon-unClicked group-hover:stroke-red-500 " />
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
						className="absolute  w-[150px] lg:bottom-full  right-4 lg:right-0 lg:left-4 mb-2 bg-white   rounded-lg shadow-lg z-50"
					>
						<motion.div custom={1} variants={itemVariants} initial="closed" animate="open" className=" p-100">
							<Form method="post" action="/logout" reloadDocument>
								<button
									type="submit"
									className="flex items-center w-full group hover:bg-gray-100 hover:text-red-500 transition-colors duration-200 cursor-pointer"
								>
									<LogoutIcon className="w-4 h-4 mr-3 text-gray-400 fill-blue-900" /> Logout
								</button>
							</Form>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
