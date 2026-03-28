# CineScope

A modern, performance-optimized movie browsing web application built with React 19 and powered by the TMDB API. Browse trending content, explore movies and TV shows, filter by genre, and search with real-time suggestions — all in a smooth, responsive experience.

---

## Features

- **Trending** — Discover what's popular right now across movies and TV shows
- **Movies** — Browse the full movies catalog with genre-based filtering
- **TV Shows** — Explore TV series with personalized genre filters
- **Search** — Real-time search with debounced suggestions and full results page
- **Detail View** — Rich content pages with overview, ratings, release info, and more
- **Genre Filtering** — Filter any content list by one or multiple genres simultaneously

---

## Tech Stack

| Layer            | Technology                                               |
| ---------------- | -------------------------------------------------------- |
| Framework        | React 19 (with React Compiler)                           |
| Build Tool       | Vite 8                                                   |
| UI Library       | Material UI v7                                           |
| State Management | Redux Toolkit                                            |
| API Caching      | Redux Toolkit Query                                      |
| HTTP Client      | Axios                                                    |
| Routing          | React Router v7                                          |
| Data Source      | [TMDB API](https://www.themoviedb.org/documentation/api) |

---

## Performance Optimizations

This project applies several production-grade techniques to keep the app fast and efficient:

### Code Splitting & Lazy Loading

Route-level components are lazy-loaded using `React.lazy` and `Suspense`, reducing the initial bundle size and speeding up the first load.

### Visibility-Based Data Fetching

API calls are deferred until a component is actually visible in the viewport, using the **Intersection Observer API**. This prevents unnecessary network requests for off-screen content.

### API Response Caching

Data fetching is handled through **Redux Toolkit Query**, which caches API responses automatically. Navigating back to a previously visited page serves data instantly without re-fetching.

### Debounced Search

The search input uses a custom `useDebouncedSearch` hook that delays the API call by 500ms after the user stops typing, preventing excessive requests on every keystroke.

### AbortController on Requests

Each debounced search request is tied to an `AbortController`. If the user types again before the previous request completes, the stale request is cancelled — preventing race conditions and redundant network activity.

---

## Getting Started

### Prerequisites

- Node.js 18+
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd moviees

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the project root:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

### Running the App

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── comps/          # Reusable UI components (chips, cards, navbar, etc.)
├── features/       # Redux slices and RTK Query API definitions
├── pages/          # Route-level page components
│   ├── Trending/
│   ├── Movies/
│   ├── TvShows/
│   └── Search/
└── main.jsx        # App entry point
```

---

## License

This project is for personal and educational use. Movie data is provided by the [TMDB API](https://www.themoviedb.org). This product uses the TMDB API but is not endorsed or certified by TMDB.
