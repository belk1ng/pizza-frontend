import { Suspense } from "react";
import UserCard from "@components/user-card";
import Aside from "./aside";
import Nav from "./nav";
import { Outlet } from "react-router-dom";
import classes from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <>
      <Aside>
        <UserCard fullName="Дмитрий Белкин" email="be1kindmit@yandex.ru" />
        <Nav />
      </Aside>
      <main className={classes.content}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default MainLayout;
