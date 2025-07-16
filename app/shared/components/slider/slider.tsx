import { TMediaInfo } from '@/shared/types';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { SliderContentItem } from './slider-content-item';

export const Slider: React.FC<{ sliderData: TMediaInfo[] }> = ({ sliderData }) => {
	const constraintsRef = useRef(null);
	return (
		<div className="relative flex flex-row gap-4 md:gap-10 cursor-move" ref={constraintsRef}>
			<motion.ul className="flex h-full items-center gap-4 md:gap-10" dragConstraints={constraintsRef} drag="x">
				{sliderData?.map((item) => (
					<li key={item.id}>
						<SliderContentItem item={item} />
					</li>
				))}
			</motion.ul>
		</div>
	);
};
export default Slider;
