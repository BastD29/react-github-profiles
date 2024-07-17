import { FC } from "react";
import { GithubProfileType } from "../../models/github";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/favorites/actions";
import BlankFavoriteIcon from "../Icons/BlankFavoriteIcon";
import BlackFavoriteIcon from "../Icons/BlackFavoriteIcon";
import style from "./UserCard.module.scss";

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
        {isFavorite ? (
          <button onClick={handleRemoveFavorite}>
            <BlackFavoriteIcon />
          </button>
        ) : (
          <button onClick={handleAddFavorite}>
            <BlankFavoriteIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default UserCard;
