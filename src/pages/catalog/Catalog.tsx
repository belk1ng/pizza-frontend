import { Link } from "react-router-dom";

import SearchIcon from "@assets/icons/Search";
import Heading from "@components/heading";
import Input from "@components/input";
import ProductCard from "@components/product-card";
import withTitle from "@hocs/withTitle";
import { ROOT_PATHS } from "@routes/paths.ts";

import classes from "./Catalog.module.css";

const Catalog = () => {
  const PRODUCTS = [
    {
      id: 1,
      title: "Наслаждение 1",
      description: "Салями, руккола, помидоры, оливки",
      price: 300,
      rating: 3.5,
      imageSource:
        "https://cdnn21.img.ria.ru/images/98976/61/989766135_0:105:2000:1230_600x0_80_0_0_22f73da863b108382af02825eddc84f0.jpg",
    },
    {
      id: 2,
      title: "Наслаждение 2",
      description: "Салями, руккола, помидоры, оливки",
      price: 550,
      rating: 4.1,
      imageSource:
        "https://cdnn21.img.ria.ru/images/98976/61/989766135_0:105:2000:1230_600x0_80_0_0_22f73da863b108382af02825eddc84f0.jpg",
    },
    {
      id: 3,
      title: "Наслаждение 3",
      description: "Салями, руккола, помидоры, оливки",
      price: 800,
      rating: 5.0,
      imageSource:
        "https://cdnn21.img.ria.ru/images/98976/61/989766135_0:105:2000:1230_600x0_80_0_0_22f73da863b108382af02825eddc84f0.jpg",
    },
  ];

  return (
    <>
      <div className={classes.header}>
        <Heading>Каталог</Heading>
        <Input
          name={"search"}
          className={classes["header__input"]}
          placeholder="Введите блюдо или состав"
          startIcon={<SearchIcon />}
        />
      </div>
      <div className={classes.content}>
        {PRODUCTS.map(
          ({ id, title, description, price, imageSource, rating }) => (
            <Link key={id} to={ROOT_PATHS.product.resolver(id)}>
              <ProductCard
                title={title}
                description={description}
                price={price}
                imageSource={imageSource}
                rating={rating}
              />
            </Link>
          )
        )}
      </div>
    </>
  );
};

const CatalogWithTitle = withTitle(Catalog, "Каталог");

export default CatalogWithTitle;
