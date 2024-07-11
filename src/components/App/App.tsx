import { FC } from "react";
import UsersList from "../UsersList/UsersList";
import style from "./App.module.scss";

const App: FC = () => {
  return (
    <div className={style["app"]}>
      <UsersList />
    </div>
  );
};

export default App;
