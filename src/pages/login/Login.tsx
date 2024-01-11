import { AxiosError } from "axios";
import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import axiosInstance from "@/api/axios";
import type { LoginResponse } from "@/types/auth";
import Button from "@components/button";
import Heading from "@components/heading";
import Input from "@components/input";
import withTitle from "@hocs/withTitle";
import { AUTH_PATHS, ROOT_PATHS } from "@routes/paths";

import classes from "./Login.module.css";
import type { FormLoginValues, LoginValues } from "./Login.types";

const Login = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement & FormLoginValues;
    const data = {
      email: form.email.value,
      password: form.password.value,
    };
    setError("");
    await login(data);
  };

  const login = async (formData: LoginValues) => {
    try {
      const { data } = await axiosInstance.post<LoginResponse>("/auth/login", {
        ...formData,
      });
      localStorage.setItem("access_token", data.access_token);
      navigate(ROOT_PATHS.root);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.message;
        console.log(errorMessage);
        setError(errorMessage ?? "");
      }
    }
  };

  return (
    <section className={classes.content}>
      <Heading>Вход</Heading>
      <p className={classes.content__error}>{error}</p>
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
