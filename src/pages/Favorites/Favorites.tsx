import { FC } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import UserCard from "../../components/UserCard/UserCard";
import style from "./Favorites.module.scss";

const Favorites: FC = () => {
  const { favorites } = useSelector((state: RootStateType) => state.favorites);
  console.log("favorites:", favorites);

  const isFavorite = (id: number) =>
    favorites?.some((profile) => profile.id === id);

  return (
    <div className={style["favorites"]}>
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
    </div>
  );
};

export default Favorites;
