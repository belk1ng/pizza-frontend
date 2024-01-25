import type { HTMLAttributes } from "react";

import type { Product } from "@/types/product";

export interface ProductCardProps extends HTMLAttributes<HTMLLIElement> {
  record: Product;
}
