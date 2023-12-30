import { FC } from "react";
import { Link } from "react-router-dom";
import { NavItemProps } from "./NavItem.props";
import classes from "./NavItem.module.css";

const NavItem: FC<NavItemProps> = ({ icon, children, href }) => {
  return (
    <li className={classes["nav-item"]}>
      <Link className={classes["nav-item__link"]} to={href}>
        {icon && icon}
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
