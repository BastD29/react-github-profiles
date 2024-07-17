import { FC } from "react";
import UsersList from "../../components/UsersList/UsersList";
import Pagination from "../../components/Pagination/Pagination2";
import style from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={style["home"]}>
      <UsersList />
      <Pagination />
    </div>
  );
};

export default Home;
