import { usePodcasts } from "../context/PodcastContext";

export default function SortSelect() {
  // I bring in the sortOrder state from my context.
  const { sortOrder, setSortOrder } = usePodcasts();

  return (
    <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)} // I update sorting when user selects one.
    >
      <option value="newest">Newest first</option>
      <option value="title-asc">Title A–Z</option>
      <option value="title-desc">Title Z–A</option>
    </select>
  );
}
