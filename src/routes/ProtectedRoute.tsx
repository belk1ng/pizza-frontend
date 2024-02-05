import type { FC } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Loader from "@components/ui/loader";
import useInitAuth from "@hooks/useInitAuth";
import { AUTH_PATHS } from "@routes/paths";
import { useAppSelector } from "@store/hooks";
import { authSelector } from "@store/slices";

interface ProtectedRouteProps {
  children: Children;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { isInit, isAuthenticated } = useAppSelector(authSelector);

  useInitAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && isInit) {
      navigate(AUTH_PATHS.sign_in);
    }
  }, [isAuthenticated, isInit, navigate]);

  if (!isInit) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to={AUTH_PATHS.sign_in} replace />;
  }

  return children;
};

export default ProtectedRoute;
