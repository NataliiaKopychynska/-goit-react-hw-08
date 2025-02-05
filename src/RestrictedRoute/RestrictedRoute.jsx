// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsAuthenticated } from "../../redux/auth/selectors";

import { useSelector } from "react-redux";
import { selectIsLogin } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

// const RestrictedRoute = ({
//   component: Component,
//   redirectTo = "/contacts",
// }) => {
//   // const isAuthenticated = useSelector(selectIsAuthenticated);

//   return isAuthenticated ? <Navigate to={redirectTo} /> : <Component />;
// };

// export default RestrictedRoute;

const RestrictedRoute = ({ children }) => {
  const isLogin = useSelector(selectIsLogin);
  return !isLogin ? children : <Navigate to="/login" />;
};

export default RestrictedRoute;
