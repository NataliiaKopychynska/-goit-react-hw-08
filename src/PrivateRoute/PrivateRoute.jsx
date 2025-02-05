import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/contacts/contactsSice";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLogin = useSelector(selectIsLoading);
  return isLogin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
