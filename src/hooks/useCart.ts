import { useCallback, useEffect, useRef, useState } from "react";

import axiosInstance from "@/api/axios";
import type { Product, Products } from "@/types/product";
import { useAppSelector } from "@store/hooks";
import { cartSelector } from "@store/slices";

const useCart = () => {
  const [cartItems, setCartItems] = useState<Products>([]);

  const [loading, setLoading] = useState(false);

  const { products } = useAppSelector(cartSelector);

  const productsRef = useRef<number[]>(Object.keys(products).map(Number));

  // TODO: Добавить обработку ошибок
  const getProduct = useCallback(
    async (id: number, controller: AbortController) => {
      const { data } = await axiosInstance.get<Product>(`/products/${id}`, {
        signal: controller.signal,
      });

      return data;
    },
    []
  );

  const loadItems = useCallback(
    async (controller: AbortController) => {
      setLoading(true);

      const productIds = productsRef.current;

      if (productIds) {
        const response = await Promise.all(
          productIds.map((productId) => getProduct(productId, controller))
        );

        setCartItems(response);
      }

      setLoading(false);
    },
    [getProduct]
  );

  useEffect(() => {
    const controller = new AbortController();

    void loadItems(controller);

    return () => {
      controller.abort();
    };
  }, [loadItems]);

  useEffect(() => {
    const productIds = Object.keys(products);

    setCartItems((prev) =>
      prev.filter(({ id }) => productIds.includes(String(id)))
    );
  }, [products]);

  return { cartItems, loading };
};

export default useCart;
