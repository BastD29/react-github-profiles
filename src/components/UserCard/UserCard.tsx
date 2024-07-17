import { FC } from "react";
import { GithubProfileType } from "../../models/github";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/favorites/actions";
import style from "./UserCard2.module.scss";

type UserCardProps = {
  profile: GithubProfileType;
  isFavorite?: boolean;
};

const UserCard: FC<UserCardProps> = ({ profile, isFavorite }) => {
  const { login, avatar_url, html_url, id } = profile;

  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavorite(profile));
  };

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(id));
  };

  return (
    <div className={style["user-card"]}>
      <img
        className={style["user-card__img"]}
        src={avatar_url}
        alt={`${profile.login}'s avatar`}
      />
      <div className={style["user-card__info"]}>
        <h3>{login}</h3>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          Github profile
        </a>
        {/* <button onClick={handleAddFavorite}>Add to favorites</button> */}
        {isFavorite ? (
          <button onClick={handleRemoveFavorite}>Remove from favorites</button>
        ) : (
          <button onClick={handleAddFavorite}>Add to favorites</button>
        )}
      </div>
    </div>
  );
};

export default UserCard;
