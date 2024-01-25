import type { Dispatch, FormEvent } from "react";

export interface FieldValue {
  value: string;
}

export interface FormLoginValues {
  email: FieldValue;
  password: FieldValue;
}

export type FormSignupValues = FormLoginValues & {
  name: FieldValue;
};

export interface LoginValues {
  email: string;
  password: string;
}

export type SignupValues = LoginValues & {
  name: string;
};

type AuthTemplateVariant = "signup" | "login";

export interface AuthTemplateProps {
  handleSubmit: Dispatch<FormEvent<HTMLFormElement>>;
  errorMessage: Nullable<string>;
  variant: AuthTemplateVariant;
}
