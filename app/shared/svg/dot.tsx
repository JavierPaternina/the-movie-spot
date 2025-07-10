import { TSvgIconsProps } from '@Types';
import React from 'react';

export const DotIcon: React.FC<TSvgIconsProps> = ({ className }) => (
	<svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
		<circle opacity="0.5" cx="1.5" cy="2" r="1.5" fill="white" />
	</svg>
);
export default DotIcon;
