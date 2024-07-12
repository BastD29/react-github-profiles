import { FC } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import UserCard from "../UserCard/UserCard";
import style from "./FavoritesList.module.scss";

const FavoritesList: FC = () => {
  const { favorites } = useSelector((state: RootStateType) => state.favorites);
  console.log("favorites:", favorites);

  const isFavorite = (id: number) =>
    favorites?.some((profile) => profile.id === id);

  return (
    <ul className={style["favorites-list"]}>
      {favorites?.length === 0 ? (
        <p>No favorite added yet.</p>
      ) : (
        favorites?.map((profile) => (
          <UserCard
            key={profile.id}
            profile={profile}
            isFavorite={isFavorite(profile.id)}
          />
        ))
      )}
    </ul>
  );
};

export default FavoritesList;
