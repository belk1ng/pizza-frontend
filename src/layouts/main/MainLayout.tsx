import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import LogoutIcon from "@assets/icons/Logout";
import Button from "@components/ui/button";
import Loader from "@components/ui/loader";
import UserCard from "@components/user-card";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { authActions, authSelector } from "@store/slices";

import Aside from "./aside";
import classes from "./MainLayout.module.css";
import Nav from "./nav";

const MainLayout = () => {
  const { user } = useAppSelector(authSelector);

  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <Aside>
        <UserCard fullName={user?.name ?? ""} email={user?.email ?? ""} />
        <Nav />
        <Button
          className={classes.aside__logout}
          startIcon={<LogoutIcon />}
          onClick={logout}
        >
          Выйти
        </Button>
      </Aside>
      <main className={classes.content}>
        <Suspense fallback={<Loader fullscreen />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default MainLayout;
