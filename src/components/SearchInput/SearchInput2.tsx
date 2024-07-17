import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/filter/actions2";
import { SAGA_FLOW_NAME } from "../../store/github/sagas4";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import MagnifyingGlassIcon from "../Icons/MagnifyingGlassIcon";
import style from "./SearchInput2.module.scss";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: FC<SearchInputProps> = ({ ...rest }) => {
  const dispatch = useDispatch();

  const { filters } = useSelector((state: RootStateType) => state.filter);

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // console.log("name:", name);
    // console.log("value:", value);

    dispatch(setFilter({ name, value }));
    // console.log("Dispatching GET_GITHUB_PROFILES action");
    dispatch({ type: SAGA_FLOW_NAME.GET_GITHUB_PROFILES }); // re-fetch data after filters have been set
  };

  return (
    <div className={style["search-input"]}>
      <MagnifyingGlassIcon />
      <input
        // className={style["search-input"]}
        type="search"
        name="q"
        placeholder="Search GitHub username…"
        onChange={handleFilter}
        value={filters?.q || ""}
        // autoFocus
        {...rest}
      />
    </div>
  );
};

export default SearchInput;
