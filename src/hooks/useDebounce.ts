import { useEffect, useMemo, useRef } from "react";

import debounce from "@utils/debounce";

const useDebounce = <F extends () => ReturnType<F>>(
  callback: F,
  delay: number
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useMemo(() => {
    return debounce(() => callbackRef.current(), delay);
  }, [delay]);
};

export default useDebounce;
