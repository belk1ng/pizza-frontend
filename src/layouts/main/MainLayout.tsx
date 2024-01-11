import { Outlet, useNavigate } from "react-router-dom";

import LogoutIcon from "@assets/icons/Logout";
import Button from "@components/button";
import UserCard from "@components/user-card";
import { AUTH_PATHS } from "@routes/paths";

import Aside from "./aside";
import classes from "./MainLayout.module.css";
import Nav from "./nav";

const MainLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate(AUTH_PATHS.sign_in);
  };

  return (
    <>
      <Aside>
        <UserCard fullName="Дмитрий Белкин" email="be1kindmit@yandex.ru" />
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
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
