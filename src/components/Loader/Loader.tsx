import { FC } from "react";
import style from "./Loader.module.scss";

const Loader: FC = () => {
  return <div className={style["loader"]}>Loading...</div>;
};

export default Loader;
