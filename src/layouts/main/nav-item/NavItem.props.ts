import { HTMLAttributes, ReactNode } from "react";

export interface NavItemProps extends HTMLAttributes<HTMLLIElement> {
  icon: ReactNode;
  href: string;
}
