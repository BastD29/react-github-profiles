import { FC } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import SearchInput from "../SearchInput/SearchInput";

const Header: FC = () => {
  const { favorites } = useSelector((state: RootStateType) => state.favorites);

  return (
    <header className={style["header"]}>
      <nav className={style["header__nav"]}>
        <Link to="/" className={style["header__link"]}>
          <h2>devfinder</h2>
        </Link>
        <Link to="/favorites" className={style["header__link"]}>
          <h2>Favorites ({favorites?.length})</h2>
        </Link>
      </nav>
      <SearchInput />
    </header>
  );
};

export default Header;
