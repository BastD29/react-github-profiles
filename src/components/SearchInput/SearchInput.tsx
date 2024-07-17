import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/filter/actions";
import { SAGA_FLOW_NAME } from "../../store/github/sagas";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import MagnifyingGlassIcon from "../Icons/MagnifyingGlassIcon";
import style from "./SearchInput.module.scss";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: FC<SearchInputProps> = ({ ...rest }) => {
  const dispatch = useDispatch();

  const { filters } = useSelector((state: RootStateType) => state.filter);

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilter({ name, value }));
    dispatch({ type: SAGA_FLOW_NAME.GET_GITHUB_PROFILES }); // re-fetch data after filters have been set
  };

  return (
    <div className={style["search-input"]}>
      <MagnifyingGlassIcon />
      <input
        type="search"
        name="q"
        placeholder="Search GitHub username…"
        onChange={handleFilter}
        value={filters?.q || ""}
        {...rest}
      />
    </div>
  );
};

export default SearchInput;
