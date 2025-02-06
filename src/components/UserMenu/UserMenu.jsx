import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.navDiv}>
      <p className={css.userName}>User: {user.name}</p>
      <NavLink className={css.navLink} to="/contacts">
        Contacts
      </NavLink>
      <a className={css.navLink} onClick={() => dispatch(logoutThunk())}>
        Logout
      </a>
    </div>
  );
};

export default UserMenu;
