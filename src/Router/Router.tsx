import { Routes, Route } from "react-router-dom";
import { memo, VFC } from "react";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoute";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";
import { Page404 } from "../components/pages/Page404";

export const Router: VFC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        {homeRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<HeaderLayout>{route.element}</HeaderLayout>}
          />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
