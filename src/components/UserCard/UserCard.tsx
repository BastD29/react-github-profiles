import { FC } from "react";
import { GithubProfileType } from "../../models/github";
import style from "./UserCard.module.scss";

type UserCardProps = {
  profile: GithubProfileType;
};

const UserCard: FC<UserCardProps> = ({ profile }) => {
  const { login, avatar_url, html_url } = profile;

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
        <p>Add to favorites</p>
      </div>
    </div>
  );
};

export default UserCard;
