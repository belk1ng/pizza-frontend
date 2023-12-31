import withTitle from "@hocs/withTitle";
import Heading from "@components/heading";
import Input from "@components/input";
import SearchIcon from "@assets/icons/Search.tsx";
import classes from "./Catalog.module.css";

const Catalog = () => {
  return (
    <div className={classes.header}>
      <Heading>Каталог</Heading>
      <Input
        className={classes["header__input"]}
        placeholder="Введите блюдо или состав"
        startIcon={<SearchIcon />}
      />
    </div>
  );
};

const CatalogWithTitle = withTitle(Catalog, "Каталог");

export default CatalogWithTitle;
