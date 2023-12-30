import { createBrowserRouter } from "react-router-dom";
import { Catalog, Cart } from "./elements";
import App from "@/App";
import { ROOT_PATHS } from "@routes/paths.ts";

const router = createBrowserRouter([
  {
    path: ROOT_PATHS.root,
    element: <App />,
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
