import { usePodcasts } from "../context/PodcastContext";

export default function SearchBar() {
  // I access the shared state inside context.
  const { search, setSearch, setCurrentPage } = usePodcasts();

  // When the user types, I update the search term and reset to page 1.
  function handleChange(e) {
    setSearch(e.target.value);
    setCurrentPage(1); // I do this so the user always sees results from page 1.
  }

  return (
    <input
      type="text"
      placeholder="Search podcasts..."
      value={search}
      onChange={handleChange}
    />
  );
}
