import cn from "classnames";
import type { FC } from "react";

import classes from "./Heading.module.css";
import type { HeadingProps } from "./Heading.props.ts";

const Heading: FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h2 className={cn(className, classes.heading)} {...props}>
      {children}
    </h2>
  );
};

export default Heading;
