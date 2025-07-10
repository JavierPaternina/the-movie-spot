import React from 'react';
import { TMediaInfo } from '../../types/trending';
import { SliderContentItem } from './slider-content-item';

export const Slider: React.FC<{ sliderData: TMediaInfo[] }> = ({ sliderData }) => {
	return (
		<div className="flex flex-row  gap-200 sm:gap-500 ">
			{sliderData?.map((item) => (
				<SliderContentItem item={item} key={item.id} />
			))}
		</div>
	);
};
export default Slider;
