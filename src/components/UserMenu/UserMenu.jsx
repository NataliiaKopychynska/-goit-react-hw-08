import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.userMenu}>
      <p className={css.userName}>Welcome, {user.name}</p>
      <button className={css.logoutBtn} onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
