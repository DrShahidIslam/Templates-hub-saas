import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  // Generate page numbers
  const maxPagesToShow = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  const adjustedStartPage = Math.max(1, endPage - maxPagesToShow + 1);

  const pageNumbers = [];
  for (let i = adjustedStartPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mt-16 flex items-center justify-center gap-3 flex-wrap">
      {/* Previous Button */}
      <Link
        href={`${basePath}?page=${currentPage - 1}`}
        className={`px-6 py-3 rounded-xl border border-border font-medium transition-all ${
          currentPage <= 1 ? "opacity-50 pointer-events-none" : "hover:bg-muted"
        }`}
        aria-disabled={currentPage <= 1}
      >
        Previous
      </Link>

      {/* Page Numbers */}
      <div className="hidden sm:flex items-center gap-2">
        {pageNumbers.map((pageNum) => (
          <Link
            key={pageNum}
            href={`${basePath}?page=${pageNum}`}
            className={`w-12 h-12 flex items-center justify-center rounded-xl border font-medium transition-all ${
              currentPage === pageNum
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            aria-current={currentPage === pageNum ? "page" : undefined}
          >
            {pageNum}
          </Link>
        ))}
      </div>
      
      {/* Fallback for small screens */}
      <span className="sm:hidden text-sm font-medium text-muted-foreground mx-2">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <Link
        href={`${basePath}?page=${currentPage + 1}`}
        className={`px-6 py-3 rounded-xl border border-border font-medium transition-all ${
          currentPage >= totalPages ? "opacity-50 pointer-events-none" : "hover:bg-muted"
        }`}
        aria-disabled={currentPage >= totalPages}
      >
        Next
      </Link>
    </div>
  );
}
