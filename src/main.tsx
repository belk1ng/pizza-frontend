import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "react-router-dom";
import router from "@/routes";

const mountContainer = document.getElementById("root");

if (mountContainer) {
  ReactDOM.createRoot(mountContainer).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

throw new Error("Mount container wan not found...");
