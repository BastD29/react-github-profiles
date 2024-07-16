import { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import SearchInput from "../SearchInput/SearchInput";
import style from "./Header.module.scss";

const Header: FC = () => {
  const { favorites } = useSelector((state: RootStateType) => state.favorites);
  // const { filters } = useSelector((state: RootStateType) => state.filter);
  // console.log("filters:", filters);

  // console.log("favorites.length:", favorites?.length);

  return (
    <header className={style["header"]}>
      <nav className={style["header__nav"]}>
        <Link to="/" className={style["header__link"]}>
          <h2>devfinder</h2>
        </Link>
        <Link to="/favorites" className={style["header__link"]}>
          <h2>Favorites ({favorites?.length || 0})</h2>
        </Link>
      </nav>
      {/* <div className={style["header__search"]}> */}
      {/* {filters && filters.q && <p>Search: {filters.q}</p>} */}
      <SearchInput />
      {/* </div> */}
    </header>
  );
};

export default Header;
