import { useEffect, useMemo, useRef } from "react";

import debounce from "@utils/debounce";

const useDebounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
  callback: F,
  delay: number
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useMemo(() => {
    return debounce(
      (...args: Parameters<F>) => callbackRef.current(...args),
      delay
    );
  }, [delay]);
};

export default useDebounce;
