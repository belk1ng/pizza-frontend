import type { FC } from "react";
import type { NavItemProps } from "./NavItem.props";
import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css";
import cn from "classnames";

const NavItem: FC<NavItemProps> = ({ icon, children, href }) => {
  return (
    <li className={classes["nav-item"]}>
      <NavLink
        className={({ isActive }) =>
          cn(classes["nav-item__link"], {
            [classes["nav-item__link--active"]]: isActive,
          })
        }
        to={href}
      >
        {icon && icon}
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
