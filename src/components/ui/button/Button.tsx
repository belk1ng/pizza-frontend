import cn from "classnames";
import type { FC } from "react";

import Ripple from "@components/ui/ripple";

import classes from "./Button.module.css";
import type { ButtonProps } from "./Button.props";

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  size = "small",
  startIcon,
  circled = false,
  className,
  variant = "contained",
  ...props
}) => {
  const classNames = cn(
    classes.button,
    {
      [classes["button--disabled"]]: props.disabled,
      [classes["button--large"]]: size === "large",
      [classes["button--small"]]: size === "small",
      [classes["button--circled"]]: circled,
    },
    variant === "contained"
      ? classes["button--contained"]
      : classes["button--outlined"],
    className
  );

  return (
    <button type={type} className={classNames} {...props}>
      {startIcon && startIcon}
      {children}
      <Ripple />
    </button>
  );
};

export default Button;
