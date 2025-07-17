# The Movie Spot 🎬

A modern movie discovery application built with Remix, React, and TypeScript. Discover trending movies and TV shows with a beautiful, responsive interface powered by The Movie Database (TMDB) API.

![The Movie Spot Preview]()


## ✨ Features

- 🎭 **Movie & TV Show Discovery** - Browse trending content with rich metadata
- 📱 **Responsive Design** - Beautiful UI that works on all devices
- 🔐 **User Authentication** - Secure login/registration with session management
- ⭐ **Bookmarks System** - Save your favorite movies and shows
- 🎨 **Modern UI** - Clean design with smooth animations using Framer Motion
- ⚡ **Fast Performance** - Server-side rendering with Remix and optimized images
- 🔍 **Smart Search** - Find content with intelligent filtering

## 🚀 Tech Stack

- **Framework**: [Remix v2](https://remix.run/) with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Session-based with bcrypt
- **Animations**: Framer Motion
- **API**: The Movie Database (TMDB) API
- **Deployment**: Netlify
- **State Management**: Zustand

## 🛠️ Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database
- TMDB API key

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/the-movie-spot.git
   cd the-movie-spot
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your configuration:

   ```env
   # TMDB API Configuration
   VITE_API_URL=https://api.themoviedb.org/3
   VITE_API_KEY=your_tmdb_bearer_token
   VITE_IMAGE_URL=https://image.tmdb.org/t/p/

   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/moviespot"

   # Authentication
   SESSION_SECRET="your-super-secret-session-key"
   ```
4. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   npm run db:seed  # Optional: Add sample data
   ```
5. **Start the development server**

   ```bash
   npm run dev
   ```

Visit `http://localhost:5173` to see the app running! 🎉

## 📁 Project Structure

```
the-movie-spot/
├── app/
│   ├── routes/           # Remix routes (URL structure)
│   │   ├── _index.tsx    # Home page route
│   │   ├── movies.tsx    # Movies page route
│   │   └── login.tsx     # Authentication routes
│   ├── pages/            # Page components (business logic)
│   │   ├── home/         # Home page components
│   │   └── movies/       # Movies page components
│   ├── shared/           # Reusable code
│   │   ├── components/   # UI components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── types/        # TypeScript definitions
│   │   ├── constant/     # App constants
│   │   └── svg/          # SVG icon components
│   ├── .server/          # Server-only code
│   │   ├── api/          # TMDB API client
│   │   └── auth/         # Authentication utilities
│   └── root.tsx          # App shell
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed.ts           # Database seeding
└── public/               # Static assets
```

## 🎯 Key Features Deep Dive

### Card System Architecture

The app features a sophisticated dual-mode card system:

```typescript
// Cards adapt to different contexts
const { descriptionCard, imageCard } = useCardData(item, CARD_MODE.Slider);

// Slider mode: Large images for hero sections (w780)
// Media mode: Optimized images for grids (w500)
```

### Authentication Flow

- **Registration**: Email/username with bcrypt password hashing
- **Login**: Session-based authentication with HTTP-only cookies
- **Logout**: Secure session destruction
- **Protected Routes**: Automatic redirects for authenticated content

### API Integration

Centralized TMDB API client with error handling:

```typescript
// Normalized data handling for movies and TV shows
const titleName = title || name;  // Movies use 'title', TV uses 'name'
const year = release_date || first_air_date;  // Different date fields
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run typecheck    # Run TypeScript checks

# Database
npm run db:reset     # Reset database schema
npm run db:seed      # Seed with sample data
npm run db:studio    # Open Prisma Studio

# Production
npm run build        # Build for production
npm start           # Start production server

# Testing
npm run test        # Run test suite
npm run test:watch  # Run tests in watch mode
```

## 🌐 API Reference

### TMDB Integration

The app integrates with The Movie Database API for content discovery:

- **Trending Movies**: `/trending/movie/week`
- **Trending TV Shows**: `/trending/tv/week`
- **Search**: `/search/multi?query={term}`
- **Details**: `/movie/{id}` or `/tv/{id}`

### Authentication Endpoints

- `POST /login` - User authentication
- `POST /register` - User registration
- `POST /logout` - Session termination
- `POST /bookmark-action` - Bookmark management

## 📱 Responsive Design

The app is fully responsive with breakpoints:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

Custom Tailwind spacing scale for consistent design:

- `mt-200` (200px), `mt-300` (300px) for large spacing
- Flexible grid layouts that adapt to screen size

## 🔒 Security Features

- **Password Hashing**: bcrypt with salt rounds
- **Session Security**: HTTP-only cookies with CSRF protection
- **Input Validation**: Server-side validation for all forms
- **Environment Variables**: Sensitive data kept in environment config

## 🚀 Deployment

### Netlify Deployment

1. **Connect your repository** to Netlify
2. **Set environment variables** in Netlify dashboard
3. **Configure build settings**:
   ```
   Build command: npm run build
   Publish directory: build/client
   ```

### Manual Deployment

```bash
# Build the application
npm run build

# Deploy build/ directory to your hosting provider
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** following the coding standards
4. **Write tests** for new functionality
5. **Commit changes**: `git commit -m 'Add amazing feature'`
6. **Push to branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Coding Standards

- Follow TypeScript strict mode
- Use the established import aliases (`@Components`, `@Hooks`, etc.)
- Follow the route/page separation pattern
- Use Tailwind utilities over custom CSS

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[The Movie Database (TMDB)](https://www.themoviedb.org/)** for providing the movie data API
- **[Remix Team](https://remix.run/)** for the amazing full-stack framework
- **[Tailwind CSS](https://tailwindcss.com/)** for the utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** for smooth animations

---

<div align="center">
  <strong>Built with ❤️ for movie enthusiasts</strong>
  <br />
  <sub>Don't forget to ⭐ this repository if you found it helpful!</sub>
</div>
