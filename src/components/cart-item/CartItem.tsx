import type { FC } from "react";

import RemoveIcon from "@assets/icons/Remove";
import Button from "@components/ui/button";
import { useAppDispatch } from "@store/hooks";
import { cartActions } from "@store/slices";

import classes from "./CartItem.module.css";
import type { CartItemProps } from "./CartItem.props";

const CartItem: FC<CartItemProps> = ({ id, name, image, price, count }) => {
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
          <p className={classes.item__name}>{name}</p>
          <p className={classes.item__price}>{price} ₽</p>
        </div>
      </div>
      <div className={classes.item__actions}>
        <Button circled variant="outlined" onClick={handleDecrement}>
          -
        </Button>
        <p className={classes.item__count}>{count}</p>
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
