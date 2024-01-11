import type { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { AUTH_PATHS } from "@routes/paths";

interface ProtectedRouteProps {
  children: ReactNode | ReactNode[];
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) {
    return <Navigate to={AUTH_PATHS.sign_in} replace />;
  }

  return children;
};

export default ProtectedRoute;
