import { FC } from "react";
import style from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={style["header"]}>
      <h2>Header</h2>
    </header>
  );
};

export default Header;
