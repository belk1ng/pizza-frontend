import { useLoaderData } from "react-router-dom";

import { Product } from "@/types/product";
import Heading from "@components/heading";
import withTitle from "@hocs/withTitle";

const Product = () => {
  const product = useLoaderData() as Product;

  return (
    <Heading>Просмотр продукта: {JSON.stringify(product, null, 2)}</Heading>
  );
};

const ProductWithTitle = withTitle(Product, "Продукт");

export default ProductWithTitle;
