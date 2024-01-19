import { useLoaderData, useNavigate } from "react-router-dom";

import type { Product } from "@/types/product";
import ChevronLeftIcon from "@assets/icons/ChevronLeft";
import WhiteCartIcon from "@assets/icons/WhiteCart";
import Rating from "@components/rating";
import Button from "@components/ui/button";
import Heading from "@components/ui/heading";
import withTitle from "@hocs/withTitle";
import { useAppDispatch } from "@store/hooks";
import { cartActions } from "@store/slices";

import classes from "./Product.module.css";

const Product = () => {
  const product = useLoaderData() as Product;

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleGetBack = () => {
    navigate(-1);
  };

  const handleAddToCard = () => {
    dispatch(cartActions.addProduct(product.id));
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes.header__left}>
          <div className={classes.header__backlink} onClick={handleGetBack}>
            <ChevronLeftIcon />
          </div>
          <Heading>{product.name}</Heading>
        </div>
        <Button
          startIcon={<WhiteCartIcon />}
          className={classes.header__button}
          onClick={handleAddToCard}
        >
          В корзину
        </Button>
      </header>
      <section className={classes.content}>
        <img
          src={product.image}
          alt="Изображение продукта"
          className={classes.content__image}
        />
        <div className={classes.content__area}>
          <ul className={classes.content__list}>
            <li className={classes["content__list-item"]}>
              <span>Цена</span>
              <span>{product.price} ₽</span>
            </li>
            <li className={classes["content__list-item"]}>
              <span>Рейтинг</span>
              <Rating value={product.rating} />
            </li>
          </ul>
          <span className={classes.content__span}>Состав:</span>
          <ul className={classes.content__ingredients}>
            {product.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

const ProductWithTitle = withTitle(Product, "Продукт");

export default ProductWithTitle;
