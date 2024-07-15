import { FC, InputHTMLAttributes } from "react";
import style from "./SearchInput.module.scss";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: FC<SearchInputProps> = ({ ...rest }) => {
  return (
    <input
      className={style["search-input"]}
      type="search"
      name="search"
      placeholder="Search"
      //   value={searchTerm}
      //   onChange={handleFilter}
      // autoFocus
      {...rest}
    />
  );
};

export default SearchInput;
