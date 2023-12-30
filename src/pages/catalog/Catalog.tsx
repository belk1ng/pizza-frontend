import withTitle from "@hocs/withTitle";

const Catalog = () => {
  return <h1>Catalog page</h1>;
};

const CatalogWithTitle = withTitle(Catalog, "Каталог");

export default CatalogWithTitle;
