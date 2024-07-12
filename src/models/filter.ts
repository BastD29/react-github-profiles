type FilterType = {
  [key: string]: string;
};

type FilterStateType = {
  filters: FilterType | null;
};

export type { FilterType, FilterStateType };
