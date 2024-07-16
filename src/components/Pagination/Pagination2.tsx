import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import { setCurrentPage } from "../../store/pagination/actions";
import style from "./Pagination.module.scss";

const Pagination: FC = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages, visiblePages } = useSelector(
    (state: RootStateType) => state.pagination.pagination
  );
  const { filters } = useSelector((state: RootStateType) => state.filter);

  useEffect(() => {
    // Reset to page 1 if filters change
    dispatch(setCurrentPage(1));
  }, [filters, dispatch]);

  // console.log("totalPages:", totalPages);
  // console.log("visiblePages:", visiblePages);

  if (totalPages === null) {
    return null;
  }

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const handlePreviousSet = () => {
    const firstVisiblePage = visiblePages[0];
    if (firstVisiblePage > 1) {
      handlePageChange(Math.max(1, firstVisiblePage - 1));
    }
  };

  const handleNextSet = () => {
    const lastVisiblePage = visiblePages[visiblePages.length - 1];
    if (lastVisiblePage < totalPages) {
      handlePageChange(Math.min(totalPages, lastVisiblePage + 1));
    }
  };

  return (
    <div className={style["pagination"]}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button onClick={handlePreviousSet} disabled={visiblePages[0] === 1}>
        ...
      </button>
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNextSet}
        disabled={visiblePages[visiblePages.length - 1] === totalPages}
      >
        ...
      </button>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
