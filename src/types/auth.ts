export interface LoginResponse {
  access_token: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  phone: string;
}
