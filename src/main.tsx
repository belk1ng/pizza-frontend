import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "@/routes";
import "@/index.css";

const mountContainer = document.getElementById("root");

if (mountContainer) {
  createRoot(mountContainer).render(
    <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
} else {
  throw new Error("Mount container wan not found...");
}
