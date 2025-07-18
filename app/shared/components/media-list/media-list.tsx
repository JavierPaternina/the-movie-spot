import { TMediaInfo } from '@/shared/types';
import React from 'react';
import { MediaContentItem } from './media-content-item';

export const MediaList: React.FC<{ mediaData: TMediaInfo[] }> = ({ mediaData }) => {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-200 lg:pr-[1%] ">
			{mediaData?.map((item) => (
				<MediaContentItem item={item} key={item.id} />
			))}
		</div>
	);
};
export default MediaList;
