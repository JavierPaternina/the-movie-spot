import { PlayIcon } from '@/shared/svg';
import React from 'react';

export const CardOverlayPlay: React.FC<{ onClick: () => void }> = ({ onClick }) => {
	return (
		<div className="z-10 absolute top-0 w-full h-full bg-black/50  rounded-lg  opacity-0 hover:opacity-100 transition-all duration-200 items-center ">
			<div className="flex flex-row  h-full items-center justify-center">
				<button
					type="button"
					className="flex rounded-full items-center p-100 bg-white/25 space-x-200 w-[117px] h-[48px] focus:outline-none focus:ring-2 focus:ring-white items-center"
					onClick={onClick}
					aria-label="Play"
				>
					<PlayIcon className="w-[30px] h-[30px] fill-white" />
					<span className="text-preset-3 text-white">Play</span>
				</button>
			</div>
		</div>
	);
};
