import { useCallback, useEffect, useRef, useState } from "react";

import axiosInstance from "@/api/axios";
import type { Product, Products } from "@/types/product";
import { useAppSelector } from "@store/hooks";
import { cartSelector } from "@store/slices";

const useCart = () => {
  const [cartItems, setCartItems] = useState<Products>([]);

  const { products } = useAppSelector(cartSelector);

  const productsRef = useRef<number[]>(Object.keys(products).map(Number));

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
      const productIds = productsRef.current;

      if (productIds) {
        const response = await Promise.all(
          productIds.map((productId) =>
            getProduct(Number(productId), controller)
          )
        );

        setCartItems(response);
      }
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

  return cartItems;
};

export default useCart;
