import { FormEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "@components/ui/button";
import Heading from "@components/ui/heading";
import Input from "@components/ui/input";
import withTitle from "@hocs/withTitle";
import { FormSignupValues } from "@pages/auth/Auth.types";
import { AUTH_PATHS, ROOT_PATHS } from "@routes/paths";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { authActions, authSelector } from "@store/slices";
import { signUp } from "@store/slices/auth.slice";

import classes from "./Auth.module.css";

const Signup = () => {
  // TODO: Страницы входа и регистрации схожи. Подумать как можно избавиться от
  //  дублирования кода.

  const dispatch = useAppDispatch();

  const { accessToken, signUpError } = useAppSelector(authSelector);

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate(ROOT_PATHS.root);
    }
  }, [navigate, accessToken]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(authActions.resetSignUpError());

    const form = event.target as HTMLFormElement & FormSignupValues;
    const data = {
      email: form.email.value,
      password: form.password.value,
      name: form.name.value,
    };

    dispatch(signUp(data));
  };

  return (
    <section className={classes.content}>
      <Heading>Регистрация</Heading>
      {signUpError && <p className={classes.content__error}>{signUpError}</p>}
      <form className={classes.content__form} onSubmit={handleSubmit}>
        <Input name="email" placeholder="Email" label="Ваш email" />
        <Input
          name="password"
          type="password"
          placeholder="Пароль"
          label="Ваш пароль"
        />
        <Input name="name" placeholder="Имя" label="Ваше имя" />
        <Button size="large" type="submit" className={classes.content__button}>
          Зарегистрироваться
        </Button>

        <div className={classes.content__footer}>
          <p className={classes.content__question}>Есть аккаунт?</p>
          <Link to={AUTH_PATHS.sign_in} className={classes.content__link}>
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
};

const SignupWithTitle = withTitle(Signup, "Регистрация");

export default SignupWithTitle;
