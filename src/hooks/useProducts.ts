import { useEffect } from "react";

import { Products } from "@/types/product";
import useRequest from "@hooks/useRequest";

const useProducts = (filterName: string) => {
  const {
    data: products,
    request,
    error,
    loading,
  } = useRequest<Products>("/products");

  useEffect(() => {
    const params = new URLSearchParams();
    const name = filterName.trim();

    if (name) {
      params.append("name", name);
    }

    const abortController = new AbortController();

    void request({
      params,
      signal: abortController.signal,
    });

    return () => {
      abortController.abort();
    };
  }, [filterName, request]);

  return {
    products,
    error,
    loading,
  };
};

export default useProducts;
