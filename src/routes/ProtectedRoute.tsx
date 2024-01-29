import type { FC, ReactNode } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Loader from "@components/ui/loader";
import { AUTH_PATHS } from "@routes/paths";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { authSelector } from "@store/slices";
import { getProfile } from "@store/slices/auth.slice";

interface ProtectedRouteProps {
  children: ReactNode | ReactNode[];
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { isInit, isAuthenticated } = useAppSelector(authSelector);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

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
