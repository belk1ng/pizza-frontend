import { useEffect, useState } from "react";

import axiosInstance from "@/api/axios";
import { Product, Products } from "@/types/product";
import CartItem from "@components/cart-item";
import Heading from "@components/heading";
import withTitle from "@hocs/withTitle";
import { useAppSelector } from "@store/hooks";
import { cartSelector } from "@store/slices";

const Cart = () => {
  const [items, setItems] = useState<Products>([]);

  const { products } = useAppSelector(cartSelector);

  const getProduct = async (id: number) => {
    const { data } = await axiosInstance.get<Product>(`/products/${id}`);
    return data;
  };

  const loadItems = async () => {
    const response = await Promise.all(
      Object.keys(products).map((productId) => getProduct(+productId))
    );

    setItems(response);
  };

  useEffect(() => {
    void loadItems();
  }, [products]);

  const renderItems = () => {
    if (items.length === 0) {
      return <p>Ваша корзина пуста...</p>;
    }

    return items.map(({ id, name, price, image }) => {
      const itemCount = products[id];
      return (
        <CartItem
          key={id}
          id={id}
          name={name}
          price={price}
          image={image}
          count={itemCount}
        />
      );
    });
  };

  return (
    <header>
      <Heading>Корзина</Heading>
      {renderItems()}
    </header>
  );
};

const CartWithTitle = withTitle(Cart, "Корзина");

export default CartWithTitle;
