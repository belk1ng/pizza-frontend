import { useEffect } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "@components/button";
import Heading from "@components/heading";
import Input from "@components/input";
import withTitle from "@hocs/withTitle";
import { AUTH_PATHS, ROOT_PATHS } from "@routes/paths";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { authActions, authSelector } from "@store/slices";
import { login } from "@store/slices/auth.slice";

import classes from "./Login.module.css";
import type { FormLoginValues } from "./Login.types";

const Login = () => {
  const dispatch = useAppDispatch();

  const { accessToken, loginError } = useAppSelector(authSelector);

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate(ROOT_PATHS.root);
    }
  }, [navigate, accessToken]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(authActions.resetLoginError());

    const form = event.target as HTMLFormElement & FormLoginValues;
    const data = {
      email: form.email.value,
      password: form.password.value,
    };

    dispatch(login(data));
  };

  return (
    <section className={classes.content}>
      <Heading>Вход</Heading>
      {loginError && <p className={classes.content__error}>{loginError}</p>}
      <form className={classes.content__form} onSubmit={handleSubmit}>
        <Input name="email" placeholder="Email" label="Ваш email" />
        <Input
          name="password"
          type="password"
          placeholder="Пароль"
          label="Ваш пароль"
        />
        <Button size="large" type="submit">
          Вход
        </Button>

        <div className={classes.content__footer}>
          <p className={classes.content__question}>Нет аккаунта?</p>
          <Link to={AUTH_PATHS.sign_up} className={classes.content__link}>
            Зарегистрироваться
          </Link>
        </div>
      </form>
    </section>
  );
};

const LoginWithTitle = withTitle(Login, "Вход");

export default LoginWithTitle;
