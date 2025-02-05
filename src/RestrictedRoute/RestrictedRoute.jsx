import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { selectIsAuthenticated } from "../../redux/auth/selectors";

const RestrictedRoute = ({
  component: Component,
  redirectTo = "/contacts",
}) => {
  // const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
