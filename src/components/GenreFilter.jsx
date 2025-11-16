import { usePodcasts } from "../context/PodcastContext";

export default function GenreFilter() {
  // I pull in genre options and update functions from context.
  const { genres, selectedGenre, setSelectedGenre, setCurrentPage } =
    usePodcasts();

  // I reset pagination when the user changes the genre.
  function handleGenreChange(e) {
    setSelectedGenre(e.target.value);
    setCurrentPage(1);
  }

  return (
    <select value={selectedGenre} onChange={handleGenreChange}>
      <option value="all">All Genres</option>

      {/* I loop through the genres array to create dropdown options */}
      {genres.map((g) => (
        <option key={g.id} value={g.id}>
          {g.title}
        </option>
      ))}
    </select>
  );
}
