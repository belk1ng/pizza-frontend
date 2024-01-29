import CartIcon from "@assets/icons/Cart";
import CatalogIcon from "@assets/icons/Catalog";
import { ROOT_PATHS } from "@routes/paths";
import { useAppSelector } from "@store/hooks";
import { cartSelector } from "@store/slices";

import classes from "./Nav.module.css";
import NavItem from "../nav-item";

const Nav = () => {
  const { productsCount } = useAppSelector(cartSelector);

  const navItems = [
    { title: "Каталог", icon: <CatalogIcon />, href: ROOT_PATHS.catalog },
    {
      title: "Корзина",
      icon: <CartIcon />,
      href: ROOT_PATHS.cart,
      postfix: productsCount,
    },
  ];

  return (
    <nav className={classes.nav}>
      <ul className={classes["nav-list"]}>
        {navItems.map(({ title, href, icon, postfix }) => (
          <NavItem key={href} icon={icon} href={href}>
            <p className={classes["nav-item__content"]}>
              {title}
              {postfix !== undefined && postfix > 0 && (
                <span className={classes["nav-item__badge"]}>{postfix}</span>
              )}
            </p>
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
