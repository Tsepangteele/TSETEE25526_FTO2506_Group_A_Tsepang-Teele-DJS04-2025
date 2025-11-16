import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import SortSelect from "./components/SortSelect";
import Pagination from "./components/Pagination";
import PodcastGrid from "./components/PodcastGrid";

// I am now importing my Provider + custom hook instead of fetchPodcasts.
// This is because ALL data fetching and UI state is moved into context.
import { PodcastProvider, usePodcasts } from "./context/PodcastContext";

// I created this Content component so I can access context values cleanly.
function Content() {
  // I pull out the loading state, error state, processed podcasts, and genres.
  const { loading, error, paginated, genres } = usePodcasts();

  // If data is still loading, I show a loading message.
  if (loading) return <p>Loading...</p>;

  // If an error happens, I show an error message.
  if (error) return <p>Error: {error}</p>;

  // Once everything loads, I render my full feature set.
  return (
    <>
      {/* These components update the context */}
      <SearchBar />
      <GenreFilter />
      <SortSelect />

      {/* Here I show the podcasts that have been filtered/sorted/paginated */}
      <PodcastGrid podcasts={paginated} genres={genres} />

      {/* My pagination also uses context so it stays in sync */}
      <Pagination />
    </>
  );
}

// This is the root of my app.
// I wrap everything inside PodcastProvider so the entire application
// can access my shared state and stay in sync.
export default function App() {
  return (
    <PodcastProvider>
      <Header />
      <Content />
    </PodcastProvider>
  );
}
