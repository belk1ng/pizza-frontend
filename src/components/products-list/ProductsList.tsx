import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axiosInstance from "@/api/axios";
import type { Products } from "@/types/product";
import ProductCard from "@components/product-card";
import { ROOT_PATHS } from "@routes/paths";

import classes from "./ProductsList.module.css";

const ProductsList = () => {
  const [products, setProducts] = useState<Products>([]);

  useEffect(() => {
    const abortController = new AbortController();
    const getProducts = async () => {
      try {
        const response = await axiosInstance.get<Products>("/products", {
          signal: abortController.signal,
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
  }, []);

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
