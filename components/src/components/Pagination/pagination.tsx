import React, { useState } from "react";

interface PaginationProps {
  total: number;
  initialItemsPerPage?: number;
  onPageChange?: (page: number) => void;
  onItemsPerPageChange?: (items: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  initialItemsPerPage = 10,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const totalPages = Math.ceil(total / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
      onPageChange && onPageChange(page);
    }
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(0);
    onItemsPerPageChange && onItemsPerPageChange(newItemsPerPage);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        disabled={currentPage === 0}
        className={`m-1 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-800 ${
          currentPage === 0 ? "disabled:bg-slate-500 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePageChange(0)}
      >
        First
      </button>
      <button
        disabled={currentPage === 0}
        className={`m-1 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-800 ${
          currentPage === 0 ? "disabled:bg-slate-500 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </button>
      <button
        disabled={currentPage === totalPages - 1}
        className={`m-1 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-800 ${
          currentPage === totalPages - 1
            ? "disabled:bg-slate-500 cursor-not-allowed"
            : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
      <button
        disabled={currentPage === totalPages - 1}
        className={`m-1 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-800 ${
          currentPage === totalPages - 1
            ? "disabled:bg-slate-500 cursor-not-allowed"
            : ""
        }`}
        onClick={() => handlePageChange(totalPages - 1)}
      >
        Last
      </button>

      <select
        value={itemsPerPage}
        className="m-1 px-4 py-2 rounded-md text-blue-600 bg-slate-200 border border-blue-300 focus:ring focus:ring-blue-500 focus:outline-none shadow-sm hover:bg-slate-300"
        onChange={handleItemsPerPageChange}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

export default Pagination;
