import { FC } from "react";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import style from "./Favorites.module.scss";

const Favorites: FC = () => {
  return (
    <div className={style["favorites-page"]}>
      <FavoritesList />
    </div>
  );
};

export default Favorites;
