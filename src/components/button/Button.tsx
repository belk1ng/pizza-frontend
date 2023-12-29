import { FC } from "react";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import classes from "./Button.module.css";

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  textTransform,
  startIcon,
  ...props
}) => {
  const classNames = cn({
    [classes.button]: true,
    [classes["button--disabled"]]: props.disabled,
    [classes["button--uppercase"]]: textTransform === "uppercase",
  });

  return (
    <button type={type} className={classNames} {...props}>
      {startIcon && startIcon}
      {children}
    </button>
  );
};

export default Button;
