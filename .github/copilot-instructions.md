# The Movie Spot - AI Coding Agent Instructions

## Project Overview
This is a Remix v2 movie discovery app deployed on Netlify, featuring a modern React + TypeScript stack with Tailwind CSS. The app displays trending movies/TV shows using The Movie Database (TMDB) API with a responsive sidebar navigation and card-based UI.

## Architecture & Key Patterns

### File Structure
- `app/routes/` - Remix routes that mirror URL structure
- `app/pages/` - Page components consumed by routes (separation of concerns)
- `app/shared/` - Reusable components, hooks, types, and constants
- `app/api/` - API layer with axios client and TMDB service calls

### Import Aliases (Critical)
```typescript
"@": "./app/"
"@Components": "./app/shared/components/index.ts"
"@Hooks": "./app/shared/hooks/index.ts" 
"@Types": "./app/shared/types/index.ts"
"@Svg": "./app/shared/svg/index.ts"
```

### Card System Pattern
The app uses a sophisticated card system with two modes:
- **Slider mode**: Uses `w780` images for hero carousel
- **Media mode**: Uses `w500` images for grid layouts

Cards are composed of two parts via `useCardData` hook:
```typescript
const { descriptionCard, imageCard } = useCardData(item, mode);
```

### Media Type Handling
TMDB returns unified data for movies (`title`, `release_date`) and TV shows (`name`, `first_air_date`). The `useCardData` hook normalizes this:
```typescript
const titleName = title || name;
const year = release_date || first_air_date ? new Date(release_date || first_air_date).getFullYear() : '-';
```

### Environment Variables
Required for TMDB API:
- `VITE_API_URL` - TMDB base URL
- `VITE_API_KEY` - TMDB bearer token
- `VITE_IMAGE_URL` - TMDB image CDN URL

## Development Workflow

### Commands
```bash
npm run dev        # Remix dev server with Vite
npm run build      # Production build for Netlify
npm start          # Netlify local preview
npm run typecheck  # TypeScript validation
```

### Component Development
1. Components export from `shared/components/index.ts` for clean imports
2. Use compound component pattern (e.g., `CardImage` + `CardDescription`)
3. Leverage `useCardData` hook for consistent data transformation
4. Follow Tailwind utility-first styling with custom spacing scale

### Type Safety
- All TMDB API responses use `TMediaInfo` type
- Card components use discriminated union types (`DescriptionModel`)
- SVG icons implement `TSvgIconsProps` interface

### API Integration
- Centralized axios client in `fetch-client.ts` with auth headers
- Service functions in `api-calls.ts` return `TMediaInfo[]` or handle errors
- Use Remix loaders for SSR data fetching, custom hooks for client-side state

## Key Files to Reference
- `app/shared/hooks/useCardData.ts` - Core data transformation logic
- `app/shared/constant/card-constant.ts` - UI mode configurations
- `app/shared/types/trending.ts` - TMDB API response types
- `vite.config.ts` - Import aliases and build configuration
- `app/root.tsx` - Layout structure with sidebar + main content areas

## Common Patterns
- Routes delegate to page components for testability
- Hooks encapsulate business logic and state management
- Constants define UI modes and external service configurations
- Index files provide clean barrel exports for shared modules
