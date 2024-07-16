type PaginationStateType = {
  pagination: PaginationType;
};

type PaginationType = {
  currentPage: number;
  totalPages: number | null;
  limit: number;
};

type TotalPagesPayloadType = {
  total_count: number;
  limit: number;
};

export type { PaginationStateType, PaginationType, TotalPagesPayloadType };
