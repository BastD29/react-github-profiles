import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/filter/actions2";
import { SAGA_FLOW_NAME } from "../../store/github/sagas4";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import style from "./SearchInput.module.scss";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: FC<SearchInputProps> = ({ ...rest }) => {
  const dispatch = useDispatch();

  const { filters } = useSelector((state: RootStateType) => state.filter);

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // console.log("name:", name);
    // console.log("value:", value);

    dispatch(setFilter({ name, value }));
    dispatch({ type: SAGA_FLOW_NAME.GET_GITHUB_PROFILES }); // re-fetch data after filters have been set
  };

  return (
    <input
      className={style["search-input"]}
      type="search"
      name="q"
      placeholder="Search"
      onChange={handleFilter}
      value={filters?.q}
      // autoFocus
      {...rest}
    />
  );
};

export default SearchInput;
