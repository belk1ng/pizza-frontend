import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@layouts/main";
import { ROOT_PATHS } from "@routes/paths";

import { Catalog, Cart } from "./elements";

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
    ],
  },
]);

export default router;
