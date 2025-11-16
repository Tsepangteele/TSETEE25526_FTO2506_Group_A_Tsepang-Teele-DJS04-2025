import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { fetchPodcasts } from "../api/fetchPodcasts";
import { genres } from "../data";

// I’m creating a context so the entire app can share the same state.
const PodcastContext = createContext();

export function PodcastProvider({ children }) {
  // I am storing the raw podcast data fetched from the API.
  const [podcasts, setPodcasts] = useState([]);

  // I am tracking loading and error states for good UX.
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // These are UI states the user will interact with.
  // I keep them here so every component stays in sync.
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");

  // I’m controlling pagination and how many items appear per page.
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  // I fetch my podcasts when the app loads.
  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  // I use useMemo so I don't recompute filtered lists on every render unnecessarily.
  // This makes my app faster.
  const filtered = useMemo(() => {
    // I start with the full list.
    let list = [...podcasts];

    // I filter by search term if the user typed anything.
    if (search.trim()) {
      const term = search.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(term));
    }

    // I filter by genre when a specific genre is chosen.
    if (selectedGenre !== "all") {
      const id = Number(selectedGenre);
      list = list.filter((p) => p.genres.includes(id));
    }

    // I sort based on the selected sorting option.
    if (sortOrder === "title-asc") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "title-desc") {
      list.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOrder === "newest") {
      list.sort((a, b) => new Date(b.updated) - new Date(a.updated));
    }

    return list;
  }, [podcasts, search, selectedGenre, sortOrder]);

  // I calculate how many pages I need for pagination.
  const totalPages = Math.ceil(filtered.length / pageSize);

  // Here I slice the filtered results to only show the current page.
  const paginated = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <PodcastContext.Provider
      value={{
        loading,
        error,

        paginated,
        totalPages,
        currentPage,
        setCurrentPage,

        search,
        setSearch,

        selectedGenre,
        setSelectedGenre,

        sortOrder,
        setSortOrder,

        genres,
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
}

// I created this helper so I can easily access context in any component.
export function usePodcasts() {
  return useContext(PodcastContext);
}
