import type { FC } from "react";

import ProductCard from "@components/product-card";
import Loader from "@components/ui/loader";
import Typography from "@components/ui/typography";
import useProducts from "@hooks/useProducts";

import type { ProductListProps } from "./ProductList.props";
import classes from "./ProductsList.module.css";

const ProductsList: FC<ProductListProps> = ({ searchString }) => {
  const { loading, error, products } = useProducts(searchString);

  if (loading) {
    return <Loader fullscreen />;
  }

  if (!loading && products?.length === 0) {
    return <Typography>По вашему запросу ничего не найдено</Typography>;
  }

  if (error) {
    return (
      <Typography>
        Возникла ошибка: {error?.response?.data?.message ?? error.message}
      </Typography>
    );
  }

  return (
    <ul className={classes.list}>
      {products?.map((record) => (
        <ProductCard
          key={record.id}
          record={record}
          className={classes.list__item}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
