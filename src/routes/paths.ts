const path = (rootPath: string, subLink: string) => `${rootPath}${subLink}/`;

const ROOT_PATH = "/";
const AUTH_ROOT_PATH = "/auth/";

export const ROOT_PATHS = {
  root: ROOT_PATH,
  catalog: path(ROOT_PATH, "catalog"),
  product: {
    path: path(ROOT_PATH, "catalog/:productId"),
    resolver: (productId: number) => path(ROOT_PATH, `catalog/${productId}`),
  },
  cart: path(ROOT_PATH, "cart"),
  thanks: path(ROOT_PATH, "cart/success"),
};

export const AUTH_PATHS = {
  root: AUTH_ROOT_PATH,
  sign_up: path(AUTH_ROOT_PATH, "sign_up"),
  sign_in: path(AUTH_ROOT_PATH, "sign_in"),
};
