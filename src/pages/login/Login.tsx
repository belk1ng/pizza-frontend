import type { FormEvent } from "react";
import { Link } from "react-router-dom";

import Button from "@components/button";
import Heading from "@components/heading";
import Input from "@components/input";
import withTitle from "@hocs/withTitle";
import { AUTH_PATHS } from "@routes/paths";

import classes from "./Login.module.css";

const Login = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const formDataJson = Object.fromEntries(formData);
    console.log(formDataJson);
  };

  return (
    <section className={classes.content}>
      <Heading>Вход</Heading>
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
