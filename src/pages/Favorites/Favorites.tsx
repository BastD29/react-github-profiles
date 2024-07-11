import { FC } from "react";
import style from "./Favorites.module.scss";

const Favorites: FC = () => {
  return (
    <div className={style["favorites"]}>
      <h2>Favorites</h2>
    </div>
  );
};

export default Favorites;
