import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Main from "../layouts/Main";
import UserRoute from "./UserRoute";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Home from "../pages/Home/Home";
import Users from "../pages/Users/Users";
import Projects from "../pages/Projects/Projects";
import Tasks from "../pages/Tasks/Tasks";
import Reporting from "../pages/Reporting/Reporting";

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
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/reporting",
        element: <Reporting />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <UserRoute path={"/users"}>
        <Login />
      </UserRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <UserRoute path={"/users"}>
        <Signup />
      </UserRoute>
    ),
  },
  {
    path: "*",
    element: <h2>Not found</h2>,
  },
]);
