
const BASE_CSS = {
    Media: 'gap-1 pt-1 sm:pb-1',
    Slider: 'absolute  bottom-0 p-200 gap-100',
} as const;
const DESCRIPTION_CSS = {
    Media: 'text-preset-mobile-6 sm:text-preset-5',
    Slider: 'text-preset-mobile-5 sm:text-preset-4',
} as const;
const TITLE_CSS = {
    Media: 'text-preset-mobile-4 sm:text-preset-3',
    Slider: 'text-preset-mobile-3 sm:text-preset-2',
} as const;
 const BOOKMARK_CSS = {
    isBookmarked: 'bookmark-icon-clicked',
    unBookmarked: 'bookmark-icon-unClicked',
} as const;

export { BASE_CSS, BOOKMARK_CSS, DESCRIPTION_CSS, TITLE_CSS };

