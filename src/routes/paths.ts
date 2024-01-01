const path = (rootPath: string, subLink: string) => `${rootPath}${subLink}/`;

const ROOT_PATH = "/";
const AUTH_ROOT_PATH = "/auth/";

export const ROOT_PATHS = {
  root: ROOT_PATH,
  product: {
    path: path(ROOT_PATH, "product/:productId"),
    resolver: (productId: number) => path(ROOT_PATH, `product/${productId}`),
  },
  thanks: path(ROOT_PATH, "thanks"),
  cart: path(ROOT_PATH, "cart"),
};

export const AUTH_PATHS = {
  root: AUTH_ROOT_PATH,
  sign_up: path(AUTH_ROOT_PATH, "sign_up"),
  sign_in: path(AUTH_ROOT_PATH, "sign_in"),
};
