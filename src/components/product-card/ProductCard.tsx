import type { FC, MouseEvent } from "react";

import WhiteCartIcon from "@assets/icons/WhiteCart";
import Button from "@components/button";
import Rating from "@components/rating";

import classes from "./ProductCard.module.css";
import type { ProductCardProps } from "./ProductCard.props";

const ProductCard: FC<ProductCardProps> = ({ record }) => {
  const { name, ingredients, rating, price, image } = record;
  const handleAddToCard = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <article className={classes.card}>
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
    </article>
  );
};

export default ProductCard;
