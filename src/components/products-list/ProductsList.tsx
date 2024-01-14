import { FC, useEffect } from "react";
import { Link } from "react-router-dom";

import type { Products } from "@/types/product";
import ProductCard from "@components/product-card";
import useRequest from "@hooks/useRequest";
import { ROOT_PATHS } from "@routes/paths";

import type { ProductListProps } from "./ProductList.props";
import classes from "./ProductsList.module.css";

const ProductsList: FC<ProductListProps> = ({ filterName }) => {
  const {
    data: products,
    request,
    error,
    loading,
  } = useRequest<Products>("/products");

  useEffect(() => {
    const params = new URLSearchParams();
    const name = filterName.trim();

    if (name) {
      params.append("name", name);
    }

    const abortController = new AbortController();

    void request({
      params,
      signal: abortController.signal,
    });

    return () => {
      abortController.abort();
    };
  }, [filterName, request]);

  if (loading) {
    return <p>Загружаем...</p>;
  }

  if (error) {
    return (
      <p>Возникла ошибка: {error?.response?.data?.message ?? error.message}</p>
    );
  }

  if (products && products.length > 0) {
    return (
      <ul className={classes.list}>
        {products.map((record) => (
          <li className={classes.list__item} key={record.id}>
            <Link to={ROOT_PATHS.product.resolver(record.id)}>
              <ProductCard record={record} />
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return <p>По вашему запросу ничего не найдено</p>;
};

export default ProductsList;
