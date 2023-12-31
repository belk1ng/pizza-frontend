import SearchIcon from "@assets/icons/Search";
import Heading from "@components/heading";
import Input from "@components/input";
import ProductCard from "@components/product-card";
import withTitle from "@hocs/withTitle";

import classes from "./Catalog.module.css";

const Catalog = () => {
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
        <ProductCard
          title="Наслаждение"
          description="Салями, руккола, помидоры, оливки"
          price={300}
          imageSource="https://cdnn21.img.ria.ru/images/98976/61/989766135_0:105:2000:1230_600x0_80_0_0_22f73da863b108382af02825eddc84f0.jpg"
          rating={4.5}
        />
        <ProductCard
          title="Наслаждение"
          description="Салями, руккола, помидоры, оливки"
          price={300}
          imageSource="https://cdnn21.img.ria.ru/images/98976/61/989766135_0:105:2000:1230_600x0_80_0_0_22f73da863b108382af02825eddc84f0.jpg"
          rating={4.5}
        />
        <ProductCard
          title="Наслаждение"
          description="Салями, руккола, помидоры, оливки"
          price={300}
          imageSource="https://cdnn21.img.ria.ru/images/98976/61/989766135_0:105:2000:1230_600x0_80_0_0_22f73da863b108382af02825eddc84f0.jpg"
          rating={4.5}
        />
      </div>
    </>
  );
};

const CatalogWithTitle = withTitle(Catalog, "Каталог");

export default CatalogWithTitle;
