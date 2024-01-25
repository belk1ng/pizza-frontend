import type { FC } from "react";

import RemoveIcon from "@assets/icons/Remove";
import Button from "@components/ui/button";
import { useAppDispatch } from "@store/hooks";
import { cartActions } from "@store/slices";

import classes from "./CartItem.module.css";
import type { CartItemProps } from "./CartItem.props";

const CartItem: FC<CartItemProps> = ({ record }) => {
  const { id, name, image, price, count } = record;

  const dispatch = useAppDispatch();

  const handleDecrement = () => {
    dispatch(cartActions.decrementProductCount(id));
  };

  const handleIncrement = () => {
    dispatch(cartActions.incrementProductCount(id));
  };

  const handleRemove = () => {
    dispatch(cartActions.removeProduct(id));
  };

  return (
    <li className={classes.item}>
      <div className={classes.item__info}>
        <img
          className={classes.item__image}
          src={image}
          alt="Изображение товара"
        />
        <div className={classes.item__content}>
          <span className={classes.item__name}>{name}</span>
          <span className={classes.item__price}>{price} ₽</span>
        </div>
      </div>
      <div className={classes.item__actions}>
        <Button circled variant="outlined" onClick={handleDecrement}>
          -
        </Button>
        <span className={classes.item__count}>{count}</span>
        <Button circled onClick={handleIncrement}>
          +
        </Button>
        <span className={classes.item__remove} onClick={handleRemove}>
          <RemoveIcon />
        </span>
      </div>
    </li>
  );
};

export default CartItem;
