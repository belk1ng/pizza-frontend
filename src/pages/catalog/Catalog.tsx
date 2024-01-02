import SearchIcon from "@assets/icons/Search";
import Heading from "@components/heading";
import Input from "@components/input";
import ProductsList from "@components/products-list";
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
        <ProductsList />
      </div>
    </>
  );
};

const CatalogWithTitle = withTitle(Catalog, "Каталог");

export default CatalogWithTitle;
