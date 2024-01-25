import type { Product } from "@/types/product";

interface CartItemExtra {
  count: number;
}

export interface CartItemProps {
  record: Pick<Product, "id" | "name" | "image" | "price"> & CartItemExtra;
}
