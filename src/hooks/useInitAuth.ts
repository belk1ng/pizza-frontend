import { useEffect } from "react";

import { useAppDispatch } from "@store/hooks";
import { getProfile } from "@store/slices/auth.slice";

const useInitAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
};

export default useInitAuth;
