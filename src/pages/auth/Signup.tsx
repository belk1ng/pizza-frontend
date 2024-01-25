import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import withTitle from "@hocs/withTitle";
import { FormSignupValues } from "@pages/auth/Auth.types";
import AuthTemplate from "@pages/auth/AuthTemplate.tsx";
import { ROOT_PATHS } from "@routes/paths";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { authActions, authSelector } from "@store/slices";
import { signUp } from "@store/slices/auth.slice";

const Signup = () => {
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
    <AuthTemplate
      handleSubmit={handleSubmit}
      variant="signup"
      errorMessage={signUpError}
    />
  );
};

const SignupWithTitle = withTitle(Signup, "Регистрация");

export default SignupWithTitle;
