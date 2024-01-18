import type { Product } from "@/types/product.ts";

interface CartItemExtra {
  count: number;
}

export type CartItemProps = Pick<Product, "id" | "name" | "image" | "price"> &
  CartItemExtra;
