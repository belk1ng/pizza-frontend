import type { FC } from "react";

import classes from "./Aside.module.css";
import type { AsideProps } from "./Aside.props";

const Aside: FC<AsideProps> = ({ children }) => {
  return <aside className={classes.aside}>{children}</aside>;
};

export default Aside;
