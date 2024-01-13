export interface LoginResponse {
  access_token: string;
}

export type SignupResponse = LoginResponse;

export interface User {
  id: number;
  email: string;
  name: string;
  phone: string;
}
