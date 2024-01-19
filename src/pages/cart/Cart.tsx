import { useEffect, useState, useCallback } from "react";

import axiosInstance from "@/api/axios";
import { Product, Products } from "@/types/product";
import CartItem from "@components/cart-item";
import Heading from "@components/ui/heading";
import withTitle from "@hocs/withTitle";
import { useAppSelector } from "@store/hooks";
import { cartSelector } from "@store/slices";

import classes from "./Cart.module.css";

const Cart = () => {
  const [items, setItems] = useState<Products>([]);

  const [productIds, setProductIds] = useState("");

  const { products } = useAppSelector(cartSelector);

  useEffect(() => {
    setProductIds(Object.keys(products).join(","));
  }, [products]);

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
      if (productIds) {
        const response = await Promise.all(
          productIds
            .split(",")
            .map((productId) => getProduct(Number(productId), controller))
        );

        setItems(response);
      }
    },
    [productIds, getProduct]
  );

  useEffect(() => {
    const controller = new AbortController();
    const cartProductIds = productIds.split(",");

    setItems((prev) =>
      prev.filter(({ id }) => cartProductIds.includes(String(id)))
    );

    void loadItems(controller);

    return () => {
      controller.abort();
    };
  }, [productIds, loadItems]);

  const renderItems = () => {
    if (items.length === 0) {
      return <p className={classes.section__message}>Ваша корзина пуста...</p>;
    }

    return items.map(({ id, name, price, image }) => (
      <CartItem
        key={id}
        id={id}
        name={name}
        price={price}
        image={image}
        count={products[id]}
      />
    ));
  };

  return (
    <>
      <header className={classes.header}>
        <Heading>Корзина</Heading>
      </header>
      <section className={classes.section}>
        <ul className={classes.section__list}>{renderItems()}</ul>
      </section>
    </>
  );
};

const CartWithTitle = withTitle(Cart, "Корзина");

export default CartWithTitle;
