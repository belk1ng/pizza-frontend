import cn from "classnames";
import type { FC } from "react";

import classes from "./Input.module.css";
import type { InputProps } from "./Input.props";

const Input: FC<InputProps> = ({
  label,
  startIcon,
  valid = true,
  className,
  ...props
}) => {
  return (
    <label className={cn(classes.input, className)}>
      {startIcon && <div className={classes.input__icon}>{startIcon}</div>}
      {label && <span className={classes.input__label}>{label}</span>}
      <input
        className={cn(classes.input__field, {
          [classes["input__field--invalid"]]: !valid,
          [classes["input__field--external"]]: !!startIcon,
        })}
        {...props}
      />
    </label>
  );
};

export default Input;
