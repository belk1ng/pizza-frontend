import type { FC } from "react";
import type { ButtonProps } from "./Button.props";
import classes from "./Button.module.css";
import cn from "classnames";

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  size = "small",
  startIcon,
  circled = false,
  className,
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
    className
  );

  return (
    <button type={type} className={classNames} {...props}>
      {startIcon && startIcon}
      {children}
    </button>
  );
};

export default Button;
