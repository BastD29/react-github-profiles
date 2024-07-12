type FilterType = {
  [key: string]: string;
};

type FilterStateType = {
  filters: FilterType | null;
};

type FilterPayloadType = { name: string; value: string };

export type { FilterType, FilterStateType, FilterPayloadType };
