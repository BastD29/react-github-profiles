import { FC } from "react";
import UsersList from "../../components/UsersList/UsersList";
import style from "./Home.module.scss";
import Pagination from "../../components/Pagination/Pagination";

const Home: FC = () => {
  return (
    <div className={style["home"]}>
      <UsersList />
      <Pagination />
    </div>
  );
};

export default Home;
