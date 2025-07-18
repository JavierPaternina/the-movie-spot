import { useBookmarkAction } from '@/shared/hooks';
import { BookmarkIcon } from '@/shared/svg';
import React from 'react';
import { BOOKMARK_CSS } from './card.model';
export const CardBookmark: React.FC<{ id: string | number }> = ({ id }) => {
	const { isBookMarked, onBookmarkClick } = useBookmarkAction(id);
	return (
		<div
			className="z-20 absolute top-100 right-100 group bookmark-icon-container hover:bookmark-icon-container-hover touch-auto"
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
	);
};
