import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axiosInstance from "@/api/axios";
import type { Products } from "@/types/product";
import ProductCard from "@components/product-card";
import { ROOT_PATHS } from "@routes/paths";

import type { ProductListProps } from "./ProductList.props";
import classes from "./ProductsList.module.css";

const ProductsList: FC<ProductListProps> = ({ filterName }) => {
  const [products, setProducts] = useState<Products>([]);

  useEffect(() => {
    const abortController = new AbortController();

    const params = new URLSearchParams();
    const name = filterName.trim();

    if (name) {
      params.append("name", name);
    }
    const getProducts = async () => {
      try {
        const response = await axiosInstance.get<Products>("/products", {
          signal: abortController.signal,
          params,
        });
        return response.data;
      } catch (error) {
        console.log(error);
        return [];
      }
    };

    getProducts().then((data) => setProducts(data));

    return () => {
      abortController.abort();
    };
  }, [filterName]);

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
};

export default ProductsList;
