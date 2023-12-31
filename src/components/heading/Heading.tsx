import type { FC } from "react";
import type { HeadingProps } from "./Heading.props";
import classes from "./Heading.module.css";
import cn from "classnames";

const Heading: FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h2 className={cn(className, classes.heading)} {...props}>
      {children}
    </h2>
  );
};

export default Heading;
