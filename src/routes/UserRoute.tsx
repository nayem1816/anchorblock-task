import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserRoute = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  const isAuth = useAuth();
  const location = useLocation();

  return !isAuth ? (
    children
  ) : (
    <Navigate to={location?.state ? location?.state : path} replace />
  );
};
export default UserRoute;
