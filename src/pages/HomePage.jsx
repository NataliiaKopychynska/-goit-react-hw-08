import { NavLink } from "react-router-dom";
import logo from "../img/logoBoook.png";
import { selectIsLogin } from "../redux/auth/selectors";
import { useSelector } from "react-redux";
function HomePage() {
  const isLoggedIn = useSelector(selectIsLogin);
  return (
    <div className="containerHome">
      <h1>
        Welcome to our app – where your contacts are always at your fingertips!
      </h1>
      <img className="logoHome" src={logo} alt="Logo" />
      <div className="containerPBTN">
        <p className="homeParagraph">
          Managing your contacts has never been easier! With our app, you can
          effortlessly store, organize, and access your contacts anytime,
          anywhere. Say goodbye to lost numbers and scattered lists – keep
          everything in one secure and convenient place.
        </p>
        {isLoggedIn ? (
          <NavLink className="ContactsBTN" to="/contacts">
            Contacts
          </NavLink>
        ) : (
          <NavLink className="ContactsBTN" to="/register">
            Register
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default HomePage;
