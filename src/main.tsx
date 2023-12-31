import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import "@/index.css";

const mountContainer = document.getElementById("root");

if (mountContainer) {
  ReactDOM.createRoot(mountContainer).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  throw new Error("Mount container wan not found...");
}
