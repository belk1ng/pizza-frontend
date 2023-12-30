import CatalogIcon from "@assets/icons/Catalog";
import CartIcon from "@assets/icons/Cart";
import { ROOT_PATHS } from "@routes/paths.ts";

export const navItems = [
  { title: "Каталог", icon: <CatalogIcon />, href: ROOT_PATHS.root },
  { title: "Корзина", icon: <CartIcon />, href: ROOT_PATHS.cart },
];