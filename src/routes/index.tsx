import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "@layouts/auth";
import MainLayout from "@layouts/main";
import { productLoader } from "@pages/product";
import { AUTH_PATHS, ROOT_PATHS } from "@routes/paths";

import { Catalog, Cart, Product, Login } from "./elements";

const router = createBrowserRouter([
  {
    path: ROOT_PATHS.root,
    element: <MainLayout />,
    children: [
      {
        path: ROOT_PATHS.root,
        element: <Catalog />,
      },
      {
        path: ROOT_PATHS.cart,
        element: <Cart />,
      },
      {
        path: ROOT_PATHS.product.path,
        element: <Product />,
        loader: productLoader,
      },
    ],
  },
  {
    path: AUTH_PATHS.root,
    element: <AuthLayout />,
    children: [
      {
        path: AUTH_PATHS.sign_in,
        element: <Login />,
      },
    ],
  },
]);

export default router;
