import type { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { AUTH_PATHS } from "@routes/paths";
import { useAppSelector } from "@store/hooks";
import { authSelector } from "@store/slices";

interface ProtectedRouteProps {
  children: ReactNode | ReactNode[];
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { accessToken } = useAppSelector(authSelector);

  if (!accessToken) {
    return <Navigate to={AUTH_PATHS.sign_in} replace />;
  }

  return children;
};

export default ProtectedRoute;
