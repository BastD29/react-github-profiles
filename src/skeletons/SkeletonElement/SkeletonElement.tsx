import { FC } from "react";
import style from "./SkeletonElement.module.scss";

type SkeletonElementProps = {
  type: string;
};

const SkeletonElement: FC<SkeletonElementProps> = ({ type }) => {
  // const classes = `skeleton ${type}`;
  // const classes = style["skeleton-element"];
  const classes = `${style["skeleton-element"]} ${style[type]}`;

  return <div className={classes}></div>;
};

export default SkeletonElement;
