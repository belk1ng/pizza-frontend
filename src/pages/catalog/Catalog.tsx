import { useState } from "react";

import SearchIcon from "@assets/icons/Search";
import ProductsList from "@components/products-list";
import SearchInput from "@components/search-input";
import Heading from "@components/ui/heading";
import withTitle from "@hocs/withTitle";

import classes from "./Catalog.module.css";

const Catalog = () => {
  const [searchString, setSearchString] = useState("");

  return (
    <>
      <header className={classes.header}>
        <Heading>Каталог</Heading>
        <SearchInput
          onDebouncedChange={setSearchString}
          debounceTimeout={600}
          name="search"
          className={classes["header__input"]}
          placeholder="Введите блюдо или состав"
          startIcon={<SearchIcon />}
        />
      </header>
      <section className={classes.content}>
        <ProductsList searchString={searchString} />
      </section>
    </>
  );
};

const CatalogWithTitle = withTitle(Catalog, "Каталог");

export default CatalogWithTitle;
