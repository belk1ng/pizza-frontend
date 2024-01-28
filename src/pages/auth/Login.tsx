import type { FormEvent } from "react";

import withTitle from "@hocs/withTitle";
import AuthTemplate from "@pages/auth/AuthTemplate";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { authActions, authSelector } from "@store/slices";
import { login } from "@store/slices/auth.slice";

import type { FormLoginValues } from "./Auth.types";

const Login = () => {
  const dispatch = useAppDispatch();

  const { loginError } = useAppSelector(authSelector);

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
    <AuthTemplate
      handleSubmit={handleSubmit}
      variant="login"
      errorMessage={loginError}
    />
  );
};

const LoginWithTitle = withTitle(Login, "Вход");

export default LoginWithTitle;
