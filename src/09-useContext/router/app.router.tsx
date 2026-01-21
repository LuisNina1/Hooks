import { createBrowserRouter, Navigate } from "react-router";
import { AboutPage } from "../pages/about/AboutPage";
import { LoginPage } from "../pages/auth/LoginPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { PrivateRouter } from "./PrivateRouter";


export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/profile",
    element: <PrivateRouter element={<ProfilePage></ProfilePage>}></PrivateRouter>,
  },
  {
    path: '*',
    element: <Navigate to='/'></Navigate>
  }
]);
