import NavItem from "../nav-item";
import { navItems } from "./Nav.config";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes["nav-list"]}>
        {navItems.map(({ title, href, icon }) => (
          <NavItem key={href} icon={icon} href={href}>
            {title}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
