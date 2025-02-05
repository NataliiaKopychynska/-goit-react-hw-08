import { NavLink } from "react-router-dom";

import css from "./AppBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLogin } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

function AppBar() {
  const isLogin = useSelector(selectIsLogin);
  // const user = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={css.navLink} to="/">
          Home
        </NavLink>
        {/* <NavLink to="/login">Login</NavLink> */}

        <div className={css.navDiv}>
          <NavLink className={css.navLink} to="/contacts">
            Contacts
          </NavLink>
          {isLogin ? (
            // <NavLink className={css.navLink} to="login">
            //   Logout
            // </NavLink>
            // <a className={css.navLink} onClick={() => dispatch(logoutThunk())}>
            //   Logout
            // </a>
            <NavLink
              className={css.navLink}
              onClick={() => dispatch(logoutThunk())}
              to="login"
            >
              Logout
            </NavLink>
          ) : (
            <div className={css.navDiv}>
              <NavLink className={css.navLink} to="login">
                login
              </NavLink>
              <NavLink className={css.navLink} to="register">
                Register
              </NavLink>
            </div>
          )}
          {/* <NavLink className={css.navLink} to="login">
            login
          </NavLink>
          <NavLink className={css.navLink} to="register">
            Register
          </NavLink> */}
        </div>
      </nav>
    </header>
  );
}

export default AppBar;
