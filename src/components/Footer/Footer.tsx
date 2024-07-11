import { FC } from "react";
import style from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={style["footer"]}>
      <p className="copyright">
        © {new Date().getFullYear()} Bastien Daniel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
