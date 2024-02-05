import type { FC } from "react";
import { Navigate } from "react-router-dom";

import Loader from "@components/ui/loader";
import useInitAuth from "@hooks/useInitAuth";
import { ROOT_PATHS } from "@routes/paths";
import { useAppSelector } from "@store/hooks";
import { authSelector } from "@store/slices";

interface PublicRouteProps {
  children: Children;
}

const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
  const { isInit, isAuthenticated } = useAppSelector(authSelector);

  useInitAuth();

  if (!isInit) {
    return <Loader />;
  }

  if (isAuthenticated) {
    return <Navigate to={ROOT_PATHS.catalog} replace />;
  }

  return children;
};

export default PublicRoute;
