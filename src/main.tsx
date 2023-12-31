import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "@/routes";
import "@/index.css";

const mountContainer = document.getElementById("root");

if (mountContainer) {
  createRoot(mountContainer).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  throw new Error("Mount container wan not found...");
}
