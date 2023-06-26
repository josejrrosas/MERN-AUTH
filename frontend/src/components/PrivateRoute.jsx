import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
//we want to be able to get user info from the state, if theres user info
//we want allow access to profile if not then we want to redirect them

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
