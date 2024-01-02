import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@layouts/main";
import { productLoader } from "@pages/product";
import { ROOT_PATHS } from "@routes/paths";

import { Catalog, Cart, Product } from "./elements";

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
]);

export default router;
