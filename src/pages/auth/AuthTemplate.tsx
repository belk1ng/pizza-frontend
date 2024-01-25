import { useEffect } from "react";
import type { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "@components/ui/button";
import Heading from "@components/ui/heading";
import Input from "@components/ui/input";
import Typography from "@components/ui/typography";
import { AuthTemplateProps } from "@pages/auth/Auth.types";
import { AUTH_PATHS, ROOT_PATHS } from "@routes/paths";
import { useAppSelector } from "@store/hooks";
import { authSelector } from "@store/slices";

import classes from "./Auth.module.css";

const AuthTemplate: FC<AuthTemplateProps> = ({
  handleSubmit,
  errorMessage,
  variant,
}) => {
  const { accessToken } = useAppSelector(authSelector);

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate(ROOT_PATHS.root);
    }
  }, [navigate, accessToken]);

  return (
    <section className={classes.content}>
      <Heading>{variant === "signup" ? "Регистрация" : "Вход"}</Heading>
      {errorMessage && (
        <Typography className={classes.content__error}>
          {errorMessage}
        </Typography>
      )}
      <form className={classes.content__form} onSubmit={handleSubmit}>
        <Input name="email" placeholder="Email" label="Ваш email" />
        <Input
          name="password"
          type="password"
          placeholder="Пароль"
          label="Ваш пароль"
        />
        {variant === "signup" && (
          <Input name="name" placeholder="Имя" label="Ваше имя" />
        )}
        <Button size="large" type="submit" className={classes.content__button}>
          {variant === "signup" ? "Зарегистрироваться" : "Войти"}
        </Button>

        <div className={classes.content__footer}>
          <Typography className={classes.content__question}>
            {variant === "signup" ? "Нет аккаунта?" : "Есть аккаунт?"}
          </Typography>
          <Link
            to={variant === "signup" ? AUTH_PATHS.sign_in : AUTH_PATHS.sign_up}
            className={classes.content__link}
          >
            {variant === "signup" ? "Войти" : "Зарегистрироваться"}
          </Link>
        </div>
      </form>
    </section>
  );
};

export default AuthTemplate;
