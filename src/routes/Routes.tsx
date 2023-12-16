import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Main from "../layouts/Main";
import UserRoute from "./UserRoute";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute path={"/login"}>
        <Main />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <h2>Home Page</h2>,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <UserRoute path={"/"}>
        <Login />
      </UserRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <UserRoute path={"/"}>
        <Signup />
      </UserRoute>
    ),
  },
  {
    path: "*",
    element: <h2>Not found</h2>,
  },
]);
