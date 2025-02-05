import { useSelector } from "react-redux";
// import { selectIsLoading } from "../redux/contacts/contactsSice";
import { Navigate } from "react-router-dom";
import { selectIsLogin } from "../redux/auth/selectors";

const PrivateRoute = ({ children }) => {
  const isLogin = useSelector(selectIsLogin);
  return isLogin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
