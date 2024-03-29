import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import router from "@/routes";
import { store } from "@store/store";
import "@/index.css";

const mountContainer = document.getElementById("root");

if (mountContainer) {
  createRoot(mountContainer).render(
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>
  );
} else {
  throw new Error("Mount container wan not found...");
}
