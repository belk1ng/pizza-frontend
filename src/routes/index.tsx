import { createBrowserRouter } from "react-router-dom";
import { Catalog, Cart } from "./elements";
import { ROOT_PATHS } from "@routes/paths.ts";
import MainLayout from "@layouts/main";

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
