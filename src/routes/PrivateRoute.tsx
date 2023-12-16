import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  const isLoggedIn = useAuth();

  return isLoggedIn ? children : <Navigate to={path} />;
};

export default PrivateRoute;
