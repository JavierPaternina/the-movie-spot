import { SearchIcon } from '@Svg';
import { Form, useSearchParams } from '@remix-run/react';
import React from 'react';
export const SearchBar: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get('search') || '';
	const onUpdateSearchParams = (newParams: string) => {
		setSearchParams((prev) => {
			prev.set('search', newParams);
			return prev;
		});
	};

	return (
		<div className="flex items-center gap-4 pr-200 lg:pr-[8%] mb-300">
			<SearchIcon className="fill-white size-[18px] sm:size-[24px]" />
			<Form method="get" action={`/search`} className="flex flex-grow items-center gap-2 ">
				<input
					type="text"
					name="search"
					placeholder="Search for movies and TV series"
					className="flex-grow bg-transparent outline-none text-white text-preset-mobile-2 sm:text-preset-3 p-100 focus:border-b focus:border-blue-500"
					value={query}
					onChange={(e) => onUpdateSearchParams(e.target.value)}
				/>
			</Form>
		</div>
	);
};
