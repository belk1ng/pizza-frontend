import cn from "classnames";
import type { FC } from "react";

import classes from "./Typography.module.css";
import type { TypographyProps } from "./Typography.props";

const Typography: FC<TypographyProps> = ({ children, className, ...props }) => {
  return (
    <p className={cn(classes.paragraph, className)} {...props}>
      {children}
    </p>
  );
};

export default Typography;
