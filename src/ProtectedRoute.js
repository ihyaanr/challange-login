import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ isAuth, children }) => {
  let location = useLocation();

  if (!isAuth) return <Navigate to="/" state={{ from: location }} />;

  return children;
};

export default ProtectedRoute;
