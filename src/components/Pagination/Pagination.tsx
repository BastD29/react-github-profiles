import { FC } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import { setCurrentPage } from "../../store/pagination/actions";
import style from "./Pagination.module.scss";

const Pagination: FC = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector(
    (state: RootStateType) => state.pagination.pagination
  );

  console.log("totalPages:", totalPages);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  if (totalPages === null) {
    return null;
  }

  return (
    <div className={style["pagination"]}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        )
      )}
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
