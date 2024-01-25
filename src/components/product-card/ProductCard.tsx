import cn from "classnames";
import type { FC, MouseEvent } from "react";
import { Link } from "react-router-dom";

import WhiteCartIcon from "@assets/icons/WhiteCart";
import Rating from "@components/rating";
import Button from "@components/ui/button";
import { ROOT_PATHS } from "@routes/paths";
import { useAppDispatch } from "@store/hooks";
import { cartActions } from "@store/slices";

import classes from "./ProductCard.module.css";
import type { ProductCardProps } from "./ProductCard.props";

const ProductCard: FC<ProductCardProps> = ({ record, className, ...props }) => {
  const { id, name, ingredients, rating, price, image } = record;

  const dispatch = useAppDispatch();
  const handleAddToCard = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(cartActions.addProduct(id));
  };

  return (
    <li className={cn(classes.card, className)} {...props}>
      <Link to={ROOT_PATHS.product.resolver(record.id)}>
        <div className={classes.card__top}>
          <img
            className={classes.card__image}
            src={image}
            alt="Изображение продукта"
          />
          <header className={classes.card__header}>
            <div className={classes.card__price}>
              {price} <span className={classes["card__price-sign"]}>₽</span>
            </div>
            <Button
              circled
              className={classes.card__button}
              onClick={handleAddToCard}
            >
              <WhiteCartIcon />
            </Button>
          </header>
        </div>
        <div className={classes.card__content}>
          <Rating value={rating} />
          <h3 className={classes.card__title}>{name}</h3>
          <p className={classes.card__description}>{ingredients.join(", ")}</p>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
