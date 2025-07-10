import { DotIcon } from '@Svg';
import { TCardDescription } from '@Types';
import React from 'react';
import { BASE_CSS, DESCRIPTION_CSS, TITLE_CSS } from './card.model';

export const CardDescription: React.FC<{ description: TCardDescription }> = ({ description }) => {
	const { MediaIcon, media, mode, title, year } = description;
	return (
		<div className={`${BASE_CSS[mode]} flex flex-col w-full justify-start overflow-hidden`}>
			<div
				className={`${DESCRIPTION_CSS[mode]} text-white flex flex-row items-center gap-2 w-full opacity-[0.70] h-[20px] content-center`}
			>
				<span>{year}</span>
				<DotIcon />
				<div className="flex flex-row gap-1 align-items-center">
					{MediaIcon && <MediaIcon className="size-[18px] sm:size-[22px] fill-white opacity-[0.70] mt-[1px]" />}
					<span className="mt-[2px]">{media}</span>
				</div>
				<DotIcon />
				<span>PG</span>
			</div>
			<p className={`${TITLE_CSS[mode]} text-white text-ellipse`}>{title}</p>
		</div>
	);
};
