import { FC } from "react";
import SkeletonElement from "../SkeletonElement/SkeletonElement";
import style from "./SkeletonUserCard.module.scss";

const SkeletonUserCard: FC = () => {
  return (
    <div className={style["skeleton-user-card"]}>
      <SkeletonElement type="avatar" />
      <div className={style["skeleton-user-card__info"]}>
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="button" />
      </div>
    </div>
  );
};

export default SkeletonUserCard;
