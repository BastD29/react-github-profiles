import { FC } from "react";
import UsersList from "../../components/UsersList/UsersList";
import style from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={style["home"]}>
      <UsersList />
    </div>
  );
};

export default Home;
