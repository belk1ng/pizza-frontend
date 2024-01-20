import type { Product } from "@/types/product.ts";

interface CartItemExtra {
  count: number;
}

export interface CartItemProps {
  record: Pick<Product, "id" | "name" | "image" | "price"> & CartItemExtra;
}
