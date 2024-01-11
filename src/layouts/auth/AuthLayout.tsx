import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import classes from "./AuthLayout.module.css";

const AuthLayout = () => {
  return (
    <>
      <aside className={classes.layout__aside}>
        <img
          src="/assets/pics/auth-background.svg"
          alt="Бесполезная картинка"
        />
      </aside>
      <main className={classes.layout__content}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default AuthLayout;
