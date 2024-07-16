import { FC } from "react";
import SkeletonElement from "../SkeletonElement/SkeletonElement";
import Shimmer from "../Shimmer/Shimmer";
import style from "./SkeletonUserCard.module.scss";

type SkeletonUserCardProps = {
  theme: string;
};

const SkeletonUserCard: FC<SkeletonUserCardProps> = ({ theme }) => {
  const themeClass = theme || "light";
  const classes = `${style["skeleton-wrapper"]} ${style[themeClass]}`;

  return (
    <div className={classes}>
      <div className={style["skeleton-user-card"]}>
        <SkeletonElement type="avatar" />
        <div className={style["skeleton-user-card__info"]}>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="button" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonUserCard;
