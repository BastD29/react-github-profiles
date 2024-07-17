import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import { SAGA_FLOW_NAME } from "../../store/github/sagas4";
import UserCard from "../UserCard/UserCard";
import Loader from "../Loader/Loader";
import style from "./UsersList2.module.scss";

const UsersList: FC = () => {
  const dispatch = useDispatch();
  const { error, loading, profiles } = useSelector(
    (state: RootStateType) => state.github
  );
  // console.log("profiles:", profiles);

  const { favorites } = useSelector((state: RootStateType) => state.favorites);

  useEffect(() => {
    // console.log("Dispatching GET_GITHUB_PROFILES action");
    dispatch({ type: SAGA_FLOW_NAME.GET_GITHUB_PROFILES });
  }, []);

  const isFavorite = (id: number) =>
    favorites?.some((profile) => profile.id === id);

  return (
    <div>
      <Loader />
      {/* {loading && <Loader />} */}
      {error && <p>{error}</p>}
      {!loading && !error && profiles && profiles.length === 0 && (
        <p>No users found.</p>
      )}
      {!loading && !error && profiles && profiles.length > 0 && (
        <ul className={style["users-list"]}>
          {profiles.map((profile) => (
            <UserCard
              key={profile.id}
              profile={profile}
              isFavorite={isFavorite(profile.id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
