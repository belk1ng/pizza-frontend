import { createBrowserRouter, Navigate } from "react-router-dom";

import AuthLayout from "@layouts/auth";
import MainLayout from "@layouts/main";
import { productLoader } from "@pages/product";
import { AUTH_PATHS, ROOT_PATHS } from "@routes/paths";
import ProtectedRoute from "@routes/ProtectedRoute";

import {
  Catalog,
  Cart,
  Product,
  OrderSuccess,
  Login,
  Signup,
} from "./elements";

const router = createBrowserRouter([
  {
    path: ROOT_PATHS.root,
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        element: <Navigate to={ROOT_PATHS.catalog} replace />,
        index: true,
      },
      {
        path: ROOT_PATHS.catalog,
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
      {
        path: ROOT_PATHS.thanks,
        element: <OrderSuccess />,
      },
    ],
  },
  {
    path: AUTH_PATHS.root,
    element: <AuthLayout />,
    children: [
      {
        element: <Navigate to={AUTH_PATHS.sign_in} replace />,
        index: true,
      },
      {
        path: AUTH_PATHS.sign_in,
        element: <Login />,
      },
      {
        path: AUTH_PATHS.sign_up,
        element: <Signup />,
      },
    ],
  },
]);

export default router;
