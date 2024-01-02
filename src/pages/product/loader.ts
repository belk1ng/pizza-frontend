import type { Params } from "react-router-dom";

import axiosInstance from "@/api/axios.ts";

const loader = async ({ params }: { params: Params<"productId"> }) => {
  const { productId } = params;
  const product = await axiosInstance.get(`/products/${productId}`);
  return product.data;
};

export default loader;
