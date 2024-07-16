import { FC } from "react";
import SkeletonUserCard from "../../skeletons/SkeletonUserCard/SkeletonUserCard";
import style from "./Loader.module.scss";

const Loader: FC = () => {
  return (
    <div className={style["loader"]}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <SkeletonUserCard key={n} />
      ))}
    </div>
  );
};

export default Loader;
