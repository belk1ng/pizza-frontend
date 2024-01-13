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
