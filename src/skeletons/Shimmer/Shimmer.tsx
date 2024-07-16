import { FC } from "react";
import style from "./Shimmer.module.scss";

const Shimmer: FC = () => {
  return (
    <div className={style["shimmer-wrapper"]}>
      <div className={style["shimmer-wrapper__shimmer"]}></div>
    </div>
  );
};

export default Shimmer;
