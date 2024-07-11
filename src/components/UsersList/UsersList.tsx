import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { SAGA_FLOW_NAME } from "../../store/github/sagas2";
import UserCard from "../UserCard/UserCard";
import style from "./UsersList.module.scss";

const UsersList: FC = () => {
  const dispatch = useDispatch();
  const { error, loading, profiles } = useSelector(
    (state: RootState) => state.github
  );

  useEffect(() => {
    dispatch({ type: SAGA_FLOW_NAME.GET_GITHUB_PROFILES });
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && profiles && profiles.length === 0 && (
        <p>No users found.</p>
      )}
      {!loading && !error && profiles && profiles.length > 0 && (
        <ul className={style["users-list"]}>
          {profiles.map((profile) => (
            // <li key={profile.id}>{profile.login}</li>
            <UserCard key={profile.id} profile={profile} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
