import type { FormEvent } from "react";

import withTitle from "@hocs/withTitle";
import { FormSignupValues } from "@pages/auth/Auth.types";
import AuthTemplate from "@pages/auth/AuthTemplate";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { authActions, authSelector } from "@store/slices";
import { signUp } from "@store/slices/auth.slice";

const Signup = () => {
  const dispatch = useAppDispatch();

  const { signUpError } = useAppSelector(authSelector);

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
    <AuthTemplate
      handleSubmit={handleSubmit}
      variant="signup"
      errorMessage={signUpError}
    />
  );
};

const SignupWithTitle = withTitle(Signup, "Регистрация");

export default SignupWithTitle;
