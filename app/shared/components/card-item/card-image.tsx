import { useBookmarkAction } from '@Hooks';
import { BookmarkIcon } from '@Svg';
import { TCardImage } from '@Types';
import React from 'react';
import { BOOKMARK_CSS } from './card.model';

export const CardImage: React.FC<{ info: TCardImage }> = ({ info }) => {
	const { isBookMarked, onBookmarkClick } = useBookmarkAction(info.id);
	return (
		<div className=" w-full h-full relative flex-shrink-0 rounded-lg ">
			<img src={info.image} alt={info.title} className="w-full h-full object-cover rounded-lg" />
			<div
				className="group bookmark-icon-container hover:bookmark-icon-container-hover touch-auto"
				onClick={onBookmarkClick}
				role="button"
				tabIndex={0}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						onBookmarkClick();
					}
				}}
			>
				<BookmarkIcon
					className={`${
						isBookMarked ? BOOKMARK_CSS.isBookmarked : BOOKMARK_CSS.unBookmarked
					} bookmark-icon m-auto group-hover:stroke-black`}
				/>
			</div>
		</div>
	);
};
export default CardImage;
