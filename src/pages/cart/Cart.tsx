import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { OrderResponse } from "@/types/order";
import CartItem from "@components/cart-item";
import Button from "@components/ui/button";
import Heading from "@components/ui/heading";
import Loader from "@components/ui/loader";
import withTitle from "@hocs/withTitle";
import useCart from "@hooks/useCart";
import useRequest from "@hooks/useRequest";
import { ROOT_PATHS } from "@routes/paths";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { cartActions, cartSelector } from "@store/slices";

import classes from "./Cart.module.css";

const Cart = () => {
  const { products, productsCount } = useAppSelector(cartSelector);

  const { cartItems, loading } = useCart();

  const dispatch = useAppDispatch();

  const { request, data } = useRequest<OrderResponse>("/order");

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      dispatch(cartActions.clearCart());
      navigate(ROOT_PATHS.thanks);
    }
  }, [data, dispatch, navigate]);

  const handleCheckout = async () => {
    void request({
      method: "POST",
      data: {
        products: cartItems.map(({ id }) => ({
          id,
          count: products[id],
        })),
      },
    });
  };

  const DELIVERY_PRICE = cartItems.length === 0 ? 0 : 300;

  const PRODUCTS_PRICE = cartItems.reduce(
    (acc, curr) => acc + curr.price * products[curr.id],
    0
  );

  const renderItems = () => {
    if (loading) {
      return <Loader />;
    }

    if (cartItems.length === 0) {
      return <p className={classes.section__message}>Ваша корзина пуста...</p>;
    }

    return cartItems.map(({ id, name, price, image }) => (
      <CartItem
        key={id}
        record={{
          id,
          name,
          price,
          image,
          count: products[id],
        }}
      />
    ));
  };

  return (
    <>
      <header className={classes.header}>
        <Heading>Корзина</Heading>
      </header>
      <section className={classes.section}>
        <ul className={classes["section__items-list"]}>{renderItems()}</ul>
        <ul className={classes["section__price-list"]}>
          <li className={classes.section__price}>
            <span>
              Сумма заказа
              <span className={classes.section__count}>({productsCount})</span>
            </span>
            <span>
              {PRODUCTS_PRICE} <span className={classes.section__ruble}>₽</span>
            </span>
          </li>
          <li className={classes.section__price}>
            <span>Доставка</span>
            <span>
              {DELIVERY_PRICE} <span className={classes.section__ruble}>₽</span>
            </span>
          </li>
          <li className={classes.section__price}>
            <span>Итог</span>
            <span>
              {PRODUCTS_PRICE + DELIVERY_PRICE}{" "}
              <span className={classes.section__ruble}>₽</span>
            </span>
          </li>
        </ul>

        <Button
          size="large"
          className={classes.section__button}
          onClick={handleCheckout}
          disabled={cartItems.length === 0}
        >
          Оформить
        </Button>
      </section>
    </>
  );
};

const CartWithTitle = withTitle(Cart, "Корзина");

export default CartWithTitle;
