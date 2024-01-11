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
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
