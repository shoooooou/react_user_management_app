import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/home/user_management",
    element: <UserManagement />
  },
  {
    path: "/home/setting",
    element: <Setting />
  },
  {
    path: "*",
    element: <Page404 />
  }
];
