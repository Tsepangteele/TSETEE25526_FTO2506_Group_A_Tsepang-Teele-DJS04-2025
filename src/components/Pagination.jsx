import { usePodcasts } from "../context/PodcastContext";

export default function Pagination() {
  // I get current page, total pages and setter from context.
  const { currentPage, totalPages, setCurrentPage } = usePodcasts();

  // If there’s only one page of results, I don’t render anything.
  if (totalPages <= 1) return null;

  return (
    <div>
      {/* I disable the button if I’m already on page 1 */}
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      {/* I disable the next button when I reach the last page */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
