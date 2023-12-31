import { FC } from "react";
import { ProductCardProps } from "./ProductCard.props";
import Button from "@components/button";
import WhiteCardIcon from "@assets/icons/WhiteCart";
import RatingIcon from "@assets/icons/Rating";
import classes from "./ProductCard.module.css";

const ProductCard: FC<ProductCardProps> = ({
  title,
  description,
  price,
  imageSource,
  rating,
}) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__top}>
        <img
          className={classes.card__image}
          src={imageSource}
          alt="Изображение продукта"
        />
        <div className={classes.card__header}>
          <div className={classes.card__price}>
            {price} <span className={classes["card__price-sign"]}>₽</span>
          </div>
          <Button circled className={classes.card__button}>
            <WhiteCardIcon />
          </Button>
        </div>
      </div>
      <div className={classes.card__content}>
        <div className={classes.card__rating}>
          {rating}
          <RatingIcon />
        </div>
        <h3 className={classes.card__title}>{title}</h3>
        <p className={classes.card__description}>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
