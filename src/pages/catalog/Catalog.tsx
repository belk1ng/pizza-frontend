import { useState } from "react";
import type { ChangeEvent } from "react";

import SearchIcon from "@assets/icons/Search";
import ProductsList from "@components/products-list";
import Heading from "@components/ui/heading";
import Input from "@components/ui/input";
import withTitle from "@hocs/withTitle";
import useDebounce from "@hooks/useDebounce";

import classes from "./Catalog.module.css";

const Catalog = () => {
  const [filterValue, setFilterValue] = useState("");

  const [debouncedFilterValue, setDebouncedFilterValue] = useState("");

  const debouncedHandleChangeValue = useDebounce(
    () => setDebouncedFilterValue(filterValue),
    500
  );

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterValue(value);
    debouncedHandleChangeValue();
  };

  return (
    <>
      <header className={classes.header}>
        <Heading>Каталог</Heading>
        <Input
          name={"search"}
          className={classes["header__input"]}
          placeholder="Введите блюдо или состав"
          startIcon={<SearchIcon />}
          value={filterValue}
          onChange={handleFilterChange}
        />
      </header>
      <section className={classes.content}>
        <ProductsList filterName={debouncedFilterValue} />
      </section>
    </>
  );
};

const CatalogWithTitle = withTitle(Catalog, "Каталог");

export default CatalogWithTitle;
