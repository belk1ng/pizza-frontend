import type { ReactNode } from "react";

declare global {
  type Nullable<T> = T | null;

  type Children = ReactNode | ReactNode[];
}

export {};
