import { useParams } from "react-router-dom";

import Heading from "@components/heading";
import withTitle from "@hocs/withTitle";

const Product = () => {
  const { productId } = useParams();

  return <Heading>Просмотр продукта {productId}</Heading>;
};

const ProductWithTitle = withTitle(Product, "Продукт");

export default ProductWithTitle;
