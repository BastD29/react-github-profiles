import { FC } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={style["header"]}>
      <nav className={style["header__nav"]}>
        <Link to="/" className={style["header__link"]}>
          <h2>devfinder</h2>
        </Link>
        <Link to="/favorites" className={style["header__link"]}>
          <h2>Favorites</h2>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
