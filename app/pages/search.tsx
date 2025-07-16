import { TMediaInfo } from '@/shared/types';
import { MediaList, SectionTitle } from '@Components';
import { useSearchParams } from '@remix-run/react';
import React from 'react';

export const SearchPage: React.FC<{ searchResults: TMediaInfo[] }> = ({ searchResults }) => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get('search') || '';
	return (
		<div className="flex flex-col h-full w-full gap-300">
			<SectionTitle>
				Found {searchResults?.length || 0} results for <span className="capitalize">{query}</span>
			</SectionTitle>
			{searchResults?.length && <MediaList mediaData={searchResults} />}
		</div>
	);
};
