import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange:(page:number) => void
}

const Pagination:React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers:React.ReactNode[] = [];

    const startPage = currentPage > 2 ? currentPage - 1 : 1;
    const endPage = currentPage < totalPages - 1 ? currentPage + 1 : totalPages;

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`mx-1 px-2 py-1 rounded text-sm ${
            currentPage === i ? "bg-sky-blue text-white" : "bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }

    // Show first page and last page for navigation
    if (startPage > 1) {
      pageNumbers.unshift(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className="mx-1 px-2 py-1 rounded text-sm bg-gray-200"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pageNumbers.unshift(
          <span key="dots1" className="px-2">
            ...
          </span>
        );
      }
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <span key="dots2" className="px-2">
            ...
          </span>
        );
      }
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className="mx-1 px-2 py-1 rounded text-sm bg-gray-200"
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-6 flex-wrap">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`mx-2 px-3 py-1 rounded ${
          currentPage === 1
            ? "bg-gray-200 text-gray-600 cursor-not-allowed"
            : "bg-sky-blue text-white hover:opacity-75"
        }`}
      >
        <FaChevronLeft />
      </button>

      <div className="flex items-center">{renderPageNumbers()}</div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`mx-2 px-3 py-1 rounded ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-600 cursor-not-allowed"
            : "bg-sky-blue text-white hover:opacity-75"
        }`}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
