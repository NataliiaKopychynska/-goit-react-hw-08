import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink className={css.link} to="/login">
        Login
      </NavLink>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
