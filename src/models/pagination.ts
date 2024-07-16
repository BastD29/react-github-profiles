type PaginationStateType = {
  pagination: PaginationType;
};

type PaginationType = {
  currentPage: number;
  totalPages: number;
  limit: number;
};

export type { PaginationStateType, PaginationType };
