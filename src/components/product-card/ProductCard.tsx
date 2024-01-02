import type { FC, MouseEvent } from "react";

import RatingIcon from "@assets/icons/Rating";
import WhiteCardIcon from "@assets/icons/WhiteCart";
import Button from "@components/button";

import classes from "./ProductCard.module.css";
import type { ProductCardProps } from "./ProductCard.props";

const ProductCard: FC<ProductCardProps> = ({ record }) => {
  const { name, ingredients, rating, price, image } = record;
  const handleAddToCard = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className={classes.card}>
      <div className={classes.card__top}>
        <img
          className={classes.card__image}
          src={image}
          alt="Изображение продукта"
        />
        <div className={classes.card__header}>
          <div className={classes.card__price}>
            {price} <span className={classes["card__price-sign"]}>₽</span>
          </div>
          <Button
            circled
            className={classes.card__button}
            onClick={handleAddToCard}
          >
            <WhiteCardIcon />
          </Button>
        </div>
      </div>
      <div className={classes.card__content}>
        <div className={classes.card__rating}>
          {rating}
          <RatingIcon />
        </div>
        <h3 className={classes.card__title}>{name}</h3>
        <p className={classes.card__description}>{ingredients.join(", ")}</p>
      </div>
    </div>
  );
};

export default ProductCard;
