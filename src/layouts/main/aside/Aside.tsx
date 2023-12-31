import type { FC } from "react";
import type { AsideProps } from "./Aside.props";
import classes from "./Aside.module.css";

const Aside: FC<AsideProps> = ({ children }) => {
  return <aside className={classes.aside}>{children}</aside>;
};

export default Aside;
