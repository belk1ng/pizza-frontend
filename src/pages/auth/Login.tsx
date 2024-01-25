import { useEffect } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import withTitle from "@hocs/withTitle";
import AuthTemplate from "@pages/auth/AuthTemplate.tsx";
import { ROOT_PATHS } from "@routes/paths";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { authActions, authSelector } from "@store/slices";
import { login } from "@store/slices/auth.slice";

import type { FormLoginValues } from "./Auth.types";

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
    <AuthTemplate
      handleSubmit={handleSubmit}
      variant="login"
      errorMessage={loginError}
    />
  );
};

const LoginWithTitle = withTitle(Login, "Вход");

export default LoginWithTitle;
