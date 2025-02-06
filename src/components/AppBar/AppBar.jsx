import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogin } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLogin);

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={css.navLink} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={css.navLink} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
      <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </header>
  );
};

export default AppBar;
