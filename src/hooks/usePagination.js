import { useState, useEffect } from 'react';

const usePagination = (initialPage = 1, totalPages = 1) => {
  const [pageId, setPageId] = useState(initialPage);

 
  const nextPaginationHandler = () => {
    if (pageId < totalPages) {
      setPageId((prev) => prev + 1);
    }
  };

  const prevPaginationHandler = () => {
    if (pageId > 1) {
      setPageId((prev) => prev - 1);
    }
  };

  return {
    pageId,
    nextPaginationHandler,
    prevPaginationHandler,
  };
};

export default usePagination;
