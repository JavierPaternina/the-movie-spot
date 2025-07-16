import { useBookmarkPage } from '@/shared/hooks/useBookmarkPage';
import { MediaList, SectionTitle } from '@Components';

export const BookmarksPage = () => {
	const { bookmarksTV, bookmarksMovies } = useBookmarkPage();

	return (
		<div className="flex flex-col h-full w-full gap-300">
			{bookmarksMovies.length > 0 && (
				<div className="mt-300 gap-200 flex flex-col">
					<SectionTitle>Bookmarked Movies</SectionTitle>
					<MediaList mediaData={bookmarksMovies} />
				</div>
			)}
			{bookmarksTV.length > 0 && (
				<div className="mt-300 gap-200 flex flex-col">
					<SectionTitle>Bookmarked TV Shows</SectionTitle>
					<MediaList mediaData={bookmarksTV} />
				</div>
			)}
		</div>
	);
};

export default BookmarksPage;
