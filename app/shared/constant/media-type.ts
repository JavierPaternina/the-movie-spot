export const MEDIA_TYPE = {
    Movie: 'movie',
    TV: 'tv',
} as const;
export type TMediaType = keyof typeof MEDIA_TYPE;