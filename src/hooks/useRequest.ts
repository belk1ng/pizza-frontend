import type { AxiosError, AxiosRequestConfig } from "axios";
import { useState, useCallback, useRef } from "react";

import axiosInstance from "@/api/axios";

type RequestAxiosError = AxiosError<{ message?: string }>;
type RequestError = Nullable<RequestAxiosError>;

type RequestData<T> = Nullable<T>;

type RequestCache<T> = {
  [url: string]: T;
};

interface RequestValues<T> {
  data: RequestData<T>;
  error: RequestError;
  loading: boolean;
  request: (config?: AxiosRequestConfig) => Promise<void>;
}

const useRequest = <T>(endpoint: string): RequestValues<T> => {
  const [data, setData] = useState<RequestData<T>>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<RequestError>(null);

  const cache = useRef<RequestCache<T>>({});

  const request = useCallback(
    async (config?: AxiosRequestConfig) => {
      setError(null);

      let url = endpoint;

      if (config?.params) {
        url += config.params.toString();
      }

      const cachedValue = cache.current[url];
      if (cachedValue) {
        setData(cachedValue);
        return;
      }

      try {
        setLoading((prev) => !prev);

        const { data } = await axiosInstance.request<T>({
          ...config,
          url: endpoint,
        });
        cache.current[url] = data;
        setData(data);
      } catch (err) {
        const error = err as RequestAxiosError;
        if (error.code !== "ERR_CANCELED") {
          setError(error);
          setData(null);
        }
      } finally {
        setLoading((prev) => !prev);
      }
    },
    [endpoint]
  );

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useRequest;
