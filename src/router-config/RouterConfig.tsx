import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { RouteConstants } from "../constants/RouteContstants";
import style from "./ProtectedLayout.module.scss";
import LoginPage from "../../src/pages/login-page/LoginPage";
import SideNavComponent from "../components/side-nav/SideNavComponent";
import TopHeaderComponent from "../components/top-header/TopHeaderComponent";

const RouterConfig = () => {
  const LoginPageLazyComponent = React.lazy(
    () => import("../../src/pages/login-page/LoginPage")
  );

  const RegistrationPageLazyComponent = React.lazy(
    () => import("../../src/pages/registration-page/RegistrationPage")
  );

  const UsersPageLazyComponent = React.lazy(
    () => import("../../src/pages/users-page/UsersPage")
  );
  const DashboardPageLazyComponent = React.lazy(
    () => import("../../src/pages/dashboard-page/DashboardPage")
  );
  const DefaultPageLazyComponent = React.lazy(()=> import("../../src/pages/default-page/DefaultPage"))
  const ChatGptPageLazyComponent = React.lazy(()=> import ("../../src/pages/chatgpt-page/ChatGptPage"))


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={RouteConstants.DefaultPage}
            element={
              <React.Suspense fallback={<>Default Page Loading</>}>
                <DefaultPageLazyComponent />
              </React.Suspense>
            }
          ></Route>
          <Route
            path={RouteConstants.Login}
            element={
              <React.Suspense fallback={<>Loading</>}>
                <LoginPageLazyComponent />
              </React.Suspense>
            }
          ></Route>
          <Route
            path={RouteConstants.Registration}
            element={
              <React.Suspense fallback={<>Loading</>}>
                <RegistrationPageLazyComponent />
              </React.Suspense>
            }
          ></Route>

          <Route element={<ProtectedLayout />}>
            <Route
              path={RouteConstants.Userspage}
              element={
                <React.Suspense fallback={<>Loading</>}>
                  <UsersPageLazyComponent />
                </React.Suspense>
              }
            ></Route>
            <Route
              path={RouteConstants.Dashboard}
              element={
                <React.Suspense fallback={<>Loading</>}>
                  <DashboardPageLazyComponent />
                </React.Suspense>
              }
            ></Route>
            <Route
              path={RouteConstants.ChatGptPage}
              element={
                <React.Suspense fallback={<>Loading</>}>
                  <ChatGptPageLazyComponent />
                </React.Suspense>
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterConfig;

const ProtectedLayout = () => {
  const menuList = [
    {
      moduleName: "User",
      modulepath: RouteConstants.Userspage,
      accessRole: ["Admin", "User"],
      iconName: "group"
    },
    {
      moduleName: "Dashboard",
      modulepath: RouteConstants.Dashboard,
      accessRole: ["Admin", "User"],
      iconName: "dashboard"
    },
    {
      moduleName: "ChatGpt",
      modulepath: RouteConstants.ChatGptPage,
      accessRole: ["Admin", "User"],
      iconName: "help"
    },
  ];

  let isAuthenticated = true;

  return (
    <>
      {isAuthenticated ? (
        <div className={style["render-layout"]}>
          <div className={style["sidenav-section"]}>
            <SideNavComponent menuItems={menuList} />
          </div>
          <div className={style["outlet-section"]}>
            <TopHeaderComponent />
            <div className={style["scrollable-outlet-section"]+ ' bg-gray-100 p-3'}>
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};
